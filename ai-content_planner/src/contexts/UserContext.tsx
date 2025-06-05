import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/superbase';

interface User {
    id: string;
    email: string;
    role: 'admin' | 'user';
}

interface UserContextType {
    user: User | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Fetch current user on mount
        const getUser = async () => {
            const { data: { user: authUser } } = await supabase.auth.getUser();
            if (authUser) {
                // Assume role is fetched from a database or Supabase user metadata
                // For simplicity, mock the role based on email (in real app, fetch from DB)
                const role = authUser.email === 'admin@example.com' ? 'admin' : 'user';
                setUser({
                    id: authUser.id,
                    email: authUser.email!,
                    role,
                });
            }
        };

        getUser();

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
            if (session?.user) {
                const role = session.user.email === 'admin@example.com' ? 'admin' : 'user';
                setUser({
                    id: session.user.id,
                    email: session.user.email!,
                    role,
                });
            } else {
                setUser(null);
            }
        });

        // Cleanup subscription on unmount
        return () => subscription.unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser(): UserContextType {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
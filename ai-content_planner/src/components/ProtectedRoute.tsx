"use client";

import { useAppSelector } from "@/hooks/useRedux";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const currentUser = useAppSelector((state) => state.auth.currentUser);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Delay redirect check to ensure Redux state is initialized
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (!currentUser) {
                router.push("/login");
            }
        }, 100); // Small delay to allow state to settle

        return () => clearTimeout(timer);
    }, [currentUser, router]);

    if (isLoading || !currentUser) {
        return null; // Render nothing while checking or redirecting
    }

    return <>{children}</>;
}
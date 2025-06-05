// src/__tests__/auth.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw'; // <-- use rest here, not http
import { server } from '@/__mocks__/msw/server';
import LoginPage from '@/app/auth/login/page';
import { supabase } from '@/lib/superbase';

jest.mock('@/lib/supabase', () => ({
    supabase: {
        auth: {
            signInWithPassword: jest.fn(),
        },
    },
}));

describe('LoginPage', () => {
    it('submits login form successfully', async () => {
        (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
            user: { id: '1', email: 'test@example.com', role: 'user' },
            session: { access_token: 'mock-token' },
            error: null,
        });

        render(<LoginPage />);
        await userEvent.type(screen.getByPlaceholderText(/email/i), 'test@example.com');
        await userEvent.type(screen.getByPlaceholderText(/password/i), 'password123');
        await userEvent.click(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
                email: 'test@example.com',
                password: 'password123',
            });
        });
    });

    it('displays error on failed login', async () => {
        server.use(
            rest.post('*/auth/v1/token', (req, res, ctx) => {
                return res(
                    ctx.status(401),
                    ctx.json({ error: 'Invalid credentials' })
                );
            })
        );

        render(<LoginPage />);
        await userEvent.type(screen.getByPlaceholderText(/email/i), 'test@example.com');
        await userEvent.type(screen.getByPlaceholderText(/password/i), 'wrong');
        await userEvent.click(screen.getByRole('button', { name: /login/i }));

        await waitFor(() => {
            expect(screen.getByText(/invalid credentials/i)).toBeInTheDocument();
        });
    });
});

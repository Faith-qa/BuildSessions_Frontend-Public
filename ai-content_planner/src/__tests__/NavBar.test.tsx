// __tests__/NavBar.test.tsx
import { render, screen } from '@testing-library/react';
import NavBar from '@/components/NavBar';
import { useUser } from '@/contexts/UserContext';
import userEvent from '@testing-library/user-event';

jest.mock('@/contexts/UserContext', () => ({
    useUser: jest.fn(),
}));

describe('NavBar', () => {
    it('shows admin panel link for admin users', () => {
        (useUser as jest.Mock).mockReturnValue({ user: { role: 'admin' } });
        render(<NavBar />);
        expect(screen.getByText(/admin panel/i)).toHaveAttribute('href', '/admin');
    });

    it('hides admin panel link for regular users', () => {
        (useUser as jest.Mock).mockReturnValue({ user: { role: 'user' } });
        render(<NavBar />);
        expect(screen.queryByText(/admin panel/i)).not.toBeInTheDocument();
    });

    it('toggles hamburger menu on mobile', async () => {
        (useUser as jest.Mock).mockReturnValue({ user: { role: 'user' } });

        // Properly mock innerWidth
        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 500,
        });

        // Trigger resize event
        window.dispatchEvent(new Event('resize'));

        render(<NavBar />);
        const hamburger = screen.getByRole('button', { name: /menu/i });
        await userEvent.click(hamburger);

        expect(screen.getByRole('navigation')).toHaveClass('block');
    });
});

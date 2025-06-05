// src/__tests__/AdminPanel.test.tsx
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '@/__mocks__/msw/server';
import AdminPanel from '@/app/admin/page';
import { useUser } from '@/contexts/UserContext';

jest.mock('@/contexts/UserContext', () => ({
    useUser: jest.fn(),
}));

describe('AdminPanel', () => {
    it('restricts access for non-admin users', () => {
        (useUser as jest.Mock).mockReturnValue({ user: { role: 'user' } });
        render(<AdminPanel />);
        expect(screen.getByText(/access denied/i)).toBeInTheDocument();
    });

    it('displays paginated user list for admins', async () => {
        (useUser as jest.Mock).mockReturnValue({ user: { role: 'admin' } });
        server.use(
            http.get('*/rest/v1/users', () => {
                return HttpResponse.json([
                    { id: '1', email: 'test@example.com', role: 'user' },
                ]);
            })
        );

        render(<AdminPanel />);
        expect(await screen.findByText(/test@example.com/i)).toBeInTheDocument();
    });
});
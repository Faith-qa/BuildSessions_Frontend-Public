// src/__tests__/AnalyticsDashboard.test.tsx
import { render, screen } from '@testing-library/react';
import { rest } from 'msw'; // <-- use rest instead of http
import { server } from '@/__mocks__/msw/server';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

describe('AnalyticsDashboard', () => {
    it('displays analytics data', async () => {
        server.use(
            rest.get('*/rest/v1/analytics', (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json([
                        { postId: '1', views: 100, likes: 20, shares: 5 },
                    ])
                );
            })
        );

        render(<AnalyticsDashboard />);
        expect(await screen.findByText(/100 views/i)).toBeInTheDocument();
        expect(screen.getByText(/20 likes/i)).toBeInTheDocument();
        expect(screen.getByText(/5 shares/i)).toBeInTheDocument();
    });
});

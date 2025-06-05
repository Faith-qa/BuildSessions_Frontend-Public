// src/__tests__/AnalyticsDashboard.test.tsx
import { render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '@/__mocks__/msw/server';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';

describe('AnalyticsDashboard', () => {
    it('displays analytics data', async () => {
        server.use(
            http.get('*/rest/v1/analytics', () => {
                return HttpResponse.json([
                    { postId: '1', views: 100, likes: 20, shares: 5 },
                ]);
            })
        );

        render(<AnalyticsDashboard />);
        expect(await screen.findByText(/100 views/i)).toBeInTheDocument();
        expect(screen.getByText(/20 likes/i)).toBeInTheDocument();
        expect(screen.getByText(/5 shares/i)).toBeInTheDocument();
    });
});
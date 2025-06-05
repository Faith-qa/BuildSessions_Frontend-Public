// src/__mocks__/msw/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
    // Mock authentication endpoint
    http.post('*/auth/v1/token', () => {
        return HttpResponse.json({
            user: { id: '1', email: 'test@example.com', role: 'user' },
            session: { access_token: 'mock-token' },
        });
    }),
    // Mock content creation endpoint
    http.post('*/rest/v1/content', () => {
        return HttpResponse.json({
            id: 'content-1',
            platform: 'twitter',
            text: 'Test post content',
            scheduledAt: new Date().toISOString(),
        });
    }),
    // Mock analytics endpoint
    http.get('*/rest/v1/analytics', () => {
        return HttpResponse.json([
            { postId: '1', views: 100, likes: 20, shares: 5 },
        ]);
    }),
    // Mock posts endpoint (for calendar)
    http.get('*/rest/v1/posts', () => {
        return HttpResponse.json([
            { id: 'post1', text: 'Test post', scheduledAt: '2025-06-05' },
        ]);
    }),
    // Mock users endpoint (for admin panel)
    http.get('*/rest/v1/users', () => {
        return HttpResponse.json([
            { id: '1', email: 'test@example.com', role: 'user' },
        ]);
    }),
];
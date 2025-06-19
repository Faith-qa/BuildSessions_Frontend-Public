import { http } from 'msw';

export const handlers = [
    http.get('/api/ai-suggestions', ({ request, params }) => {
        return new Response(JSON.stringify({ suggestion: 'Mocked AI suggestion!' }), {
            headers: { 'Content-Type': 'application/json' },
        });
    }),
];

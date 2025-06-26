// Mock data for initial in-memory state (resets on refresh)
export const users = [
    { id: 1, email: 'admin@example.com', name: 'Admin User', password: 'admin123' },
    { id: 2, email: 'user@example.com', name: 'Test User', password: 'user123' },
];

export const posts = [
    {
        id: 1,
        title: 'First Content Plan',
        content: 'This is a sample content plan.',
        scheduledDate: '2025-07-01T10:00:00Z',
        platform: 'twitter',
    },
    {
        id: 2,
        title: 'Second Content Plan',
        content: 'Another content plan example.',
        scheduledDate: '2025-07-02T12:00:00Z',
        platform: 'linkedin',
    },
];

export const analytics = [
    { postId: 1, views: 100, likes: 10, shares: 5 },
    { postId: 2, views: 150, likes: 15, shares: 8 },
];
export interface User {
    id: string;
    email: string;
    role: 'admin' | 'user';
    name: string;
}

export interface Post {
    id: string;
    content: string;
    scheduledDate: string; // ISO date string
    platform: 'twitter' | 'linkedin' | 'instagram';
}

export interface Analytics {
    postId: string;
    views: number;
    likes: number;
    shares: number;
}

export const initialUsers: User[] = [
    { id: '1', email: 'admin@example.com', role: 'admin', name: 'Admin User' },
    { id: '2', email: 'user@example.com', role: 'user', name: 'Regular User' },
];

export const initialPosts: Post[] = [
    { id: 'p1', content: 'First post!', scheduledDate: '2025-06-20T10:00:00Z', platform: 'twitter' },
];

export const initialAnalytics: Analytics[] = [
    { postId: 'p1', views: 100, likes: 20, shares: 5 },
];
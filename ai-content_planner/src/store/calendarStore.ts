import { create } from 'zustand';

interface ContentFormData {
    id: string;
    platform: 'twitter' | 'linkedin' | 'instagram';
    text: string;
    scheduledAt: string;
}

interface CalendarState {
    posts: Record<string, ContentFormData[]>;
    movePost: (postId: string, fromDate: string, toDate: string) => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
    posts: {},
    movePost: (postId, fromDate, toDate) =>
        set((state) => {
            const post = state.posts[fromDate]?.find((p) => p.id === postId);
            if (!post) return state;
            return {
                posts: {
                    ...state.posts,
                    [fromDate]: state.posts[fromDate].filter((p) => p.id !== postId),
                    [toDate]: [...(state.posts[toDate] || []), { ...post, scheduledAt: toDate }],
                },
            };
        }),
}));
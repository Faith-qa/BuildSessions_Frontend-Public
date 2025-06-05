import { render, screen } from '@testing-library/react';
import { DndContext } from '@dnd-kit/core';
import Calendar from '@/components/Calendar';
import { useCalendarStore } from '@/store/calendarStore';
import { ContentFormData } from '@/types/content';

// Define the store's state type for the mock
interface CalendarState {
    posts: Record<string, ContentFormData[]>;
    movePost: (postId: string, fromDate: string, toDate: string) => void;
}

// Mock the store with correct type
jest.mock('@/store/calendarStore', () => ({
    useCalendarStore: jest.fn<CalendarState, []>(),
}));

describe('Calendar', () => {
    it('renders posts in correct date slots', () => {
        const mockStore: CalendarState = {
            posts: {
                '2025-06-05': [
                    { id: 'post1', text: 'Test post', platform: 'twitter', scheduledAt: '2025-06-05' },
                ],
            },
            movePost: jest.fn(),
        };
        (useCalendarStore as unknown as jest.Mock).mockReturnValue(mockStore);
        render(
            <DndContext>
                <Calendar />
            </DndContext>
        );
        expect(screen.getByText(/test post/i)).toBeInTheDocument();
        expect(screen.getByText(/June 5, 2025/i)).toBeInTheDocument();
    });

    it('updates store on drag-and-drop', () => {
        const mockMovePost = jest.fn();
        const mockStore: CalendarState = {
            posts: {
                '2025-06-05': [
                    { id: 'post1', text: 'Test post', platform: 'twitter', scheduledAt: '2025-06-05' },
                ],
            },
            movePost: mockMovePost,
        };
        (useCalendarStore as unknown as jest.Mock).mockReturnValue(mockStore);
        render(
            <DndContext>
                <Calendar />
            </DndContext>
        );
        // Simulate drag-and-drop
        const dragEndEvent = {
            active: { id: 'post1', data: { current: { date: '2025-06-05' } } },
            over: { id: '2025-06-06', data: { current: { date: '2025-06-06' } } },
        };
        // Call onDragEnd manually (simplified)
        (Calendar as any).defaultProps.onDragEnd(dragEndEvent);
        expect(mockMovePost).toHaveBeenCalledWith('post1', '2025-06-05', '2025-06-06');
    });
});
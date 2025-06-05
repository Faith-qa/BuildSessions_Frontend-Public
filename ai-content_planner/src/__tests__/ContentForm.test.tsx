// src/__tests__/ContentForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { server } from '@/__mocks__/msw/server';
import ContentForm from '@/components/ContentForm';
import { supabase } from '@/lib/superbase';

jest.mock('@/lib/supabase', () => ({
    supabase: {
        from: jest.fn().mockReturnValue({
            insert: jest.fn().mockResolvedValue({ data: {}, error: null }),
        }),
    },
}));

describe('ContentForm', () => {
    it('submits valid form data', async () => {
        const mockInsert = jest.fn().mockResolvedValue({ data: {}, error: null });
        (supabase.from as jest.Mock).mockReturnValue({ insert: mockInsert });

        render(<ContentForm />);
        await userEvent.selectOptions(screen.getByRole('combobox'), 'twitter');
        await userEvent.type(screen.getByRole('textbox'), 'Test post content');
        await userEvent.type(screen.getByRole('textbox', { name: /date/i }), '2025-06-05');
        await userEvent.click(screen.getByRole('button', { name: /submit/i }));

        await waitFor(() => {
            expect(mockInsert).toHaveBeenCalledWith(
                expect.objectContaining({
                    platform: 'twitter',
                    text: 'Test post content',
                    scheduledAt: expect.any(Date),
                })
            );
        });
    });

    it('shows validation error for short text', async () => {
        render(<ContentForm />);
        await userEvent.type(screen.getByRole('textbox'), 'Short');
        await userEvent.click(screen.getByRole('button', { name: /submit/i }));

        expect(await screen.findByText(/must be at least 10 characters/i)).toBeInTheDocument();
    });

    it('fetches AI suggestions', async () => {
        server.use(
            http.post('*/api/ai-suggestions', () => {
                return HttpResponse.json(['Suggested post 1', 'Suggested post 2']);
            })
        );

        render(<ContentForm />);
        await userEvent.click(screen.getByRole('button', { name: /get ai suggestions/i }));
        await waitFor(() => {
            expect(screen.getByText(/suggested post 1/i)).toBeInTheDocument();
        });
    });
});
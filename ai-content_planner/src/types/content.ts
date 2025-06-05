// src/types/content.ts
export interface ContentFormData {
    id: string;
    platform: 'twitter' | 'linkedin' | 'instagram';
    text: string;
    scheduledAt: string;
}
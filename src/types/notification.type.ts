import { z } from 'zod'

export const userNotificationSchema = z.object({
    success: z.boolean(),
    message: z.string().nullable(),
    notifications: z.array(
        z.object({
            id: z.string(),
            type: z.string(),
            notifiable_id: z.string(),
            data: z.object({
                name: z.string(),
                title: z.string(),
                content: z.string(),
            }),
            read_at: z.string().nullable(),
            created_at: z.string(),
            updated_at: z.string(),
        }),
    ),
})

import { z } from 'zod'

export const contactSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    message: z
        .string()
        .min(10, {
            message: 'message must be at least 10 characters.',
        })
        .max(160, {
            message: 'message must not be longer than 30 characters.',
        }),
    message_title: z.string(),
})

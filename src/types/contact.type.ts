import { z } from 'zod'

export const contactSchema = z.object({
    username: z.string(),
    phone: z.coerce
        .number()
        .min(9, 'Contact must be at least 9 characters long').optional(),
    email: z.string().email(),
    content: z
        .string()
        .min(10, {
            message: 'message must be at least 10 characters.',
        })
        .max(160, {
            message: 'message must not be longer than 30 characters.',
        }),
    subject: z.string(),
})

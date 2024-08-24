import { z } from 'zod'

export const ratingCommentSchema = z.object({
    message: z
        .string()
        .min(10, {
            message: 'message must be at least 10 characters.',
        })
        .max(160, {
            message: 'message must not be longer than 30 characters.',
        }),
})

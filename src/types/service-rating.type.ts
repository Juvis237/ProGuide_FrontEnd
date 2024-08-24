import { z } from 'zod'

export const serviceRatingSchema = z.object({
    numberOfStar: z.string(),
    comment: z.string(),
})

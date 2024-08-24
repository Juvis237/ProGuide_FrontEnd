import { z } from 'zod'

export const documentRequestDataCardSchema = z.array(
    z.object({
        id: z.number(),
        status: z.string(),
        delivrable: z
            .object({
                name: z.string().optional(),
            })
            .optional(),
        available_status: z.array(z.string()),
    }),
)

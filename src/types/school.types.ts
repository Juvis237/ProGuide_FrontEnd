import { z } from 'zod'

export const schoolSchema = z.array(
    z.object({
        id: z.coerce.number().optional(),
        name: z.string().optional(),
        delivrables: z.array(
            z.object({
                id: z.coerce.number().optional(),
                name: z.string().optional(),
                price: z.string().optional(),
                duration: z.string(),
                modes: z.array(
                    z.object({
                        id: z.coerce.number(),
                        name: z.string().optional(),
                        price: z.string().optional(),
                        duration: z.string(),
                    }),
                ),
            }),
        ),
    }),
)

import { array, z } from 'zod'

export const stepIndicatorSchema = z.object({
    steps: z.array(
        z.object({
            id: z.string(),
            name: z.string(),
            fields: z.array(z.string()),
            label: z.array(z.string()),
        }),
    ),
    currentStep: z.number(),
    userExists: z.boolean(),
})

import { z } from 'zod'

export const agentOnboardingSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    nic: z.coerce.number().min(9),
    handle_doc: z.array(
        z.object({
            label: z.string(),
            value: z.enum([
                'English Proficiency',
                'Transcript',
                'Certificate',
                'Completion of studies',
            ]),
        }),
    ),
    price: z.coerce.number(),
})

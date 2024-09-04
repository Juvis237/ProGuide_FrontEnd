import { z } from 'zod'

export const operatorSchema = z.object({
    operator: z.string(),
    reference: z.string(),
    ussd_code: z.string(),
})

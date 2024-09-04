import { z } from 'zod'
export const tabSchema = z.object({
    btn_text: z.string(),
    toggleTab: z.function(),
    active: z.boolean(),
})

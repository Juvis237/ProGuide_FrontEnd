import { z } from 'zod'

export const referralSchema = z.object({
    school: z.string(),
    email: z.string(),
    id: z.number(),
    phone: z.string(),
    profile: z.string(),
    role: z.string(),
    matricule: z.string(),
    department: z.string(),
    level: z.string(),
    faculty: z.string(),
    name: z.string(),
    trans_mode: z.string(),
    payment_mode: z.string(),
    created_at: z.date(), // ensure the correct type is used here
})

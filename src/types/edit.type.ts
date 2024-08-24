import { z } from 'zod'

export const editSchema = z.object({
    first_name: z.string().min(3),
    last_name: z.string().min(3),
    matricule: z.string().min(4),
    department: z.string().min(4),
    level: z.string().min(3),
    faculty: z.string().min(3),
    email: z.string().email(),
    phone: z.coerce.number(),
})

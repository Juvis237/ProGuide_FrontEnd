import { z } from 'zod'

export const createDocumentRequestSchema = z.object({
    id: z.number(),
    duration: z.string(),
    status: z.string(),
    number: z.number().optional().nullable(),
    user: z.object({
        id: z.number(),
        email: z.string().email(),
        first_name: z.string().optional(),
        profile: z.string().optional(),
        last_name: z.string().optional(),
        phone: z.string().optional(),
        role: z.string().optional(),
        company: z.string().optional(),
        address: z.string().optional(),
        school: z.string().optional(),
        department: z.string().optional(),
        faculty: z.string().optional(),
        level: z.string().optional(),
        matricule: z.string().optional(),
        email_verified_at: z.date().optional(),
    }),
    delivrable: z.object({
        id: z.coerce.number().optional(),
        name: z.string().optional(),
        price: z.string().optional(),
        duration: z.string(),
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
                        delivrable: z.string().optional().nullable(),
                    }),
                ),
            }),
        ),
    }),
    mode: z.object({
        id: z.coerce.number(),
        name: z.string().optional(),
        price: z.string().optional(),
        duration: z.string(),
        delivrable: z.string().optional().nullable(),
    }),
    user_data: z.string().nullable(),
    date: z.date(),
    time: z.string().optional().nullable(),
})

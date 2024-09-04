import { z } from 'zod'

export const documentRequestDataSchema = z.array(
    z.object({
        payment_method: z.string().optional(),
        id: z.number(),
        duration: z.string(),
        status: z.string(),
        number: z.number().optional().nullable(),
        available_status: z.array(z.string()),
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
        user_data: z.object({
            my_school: z.coerce.number(),
            for_me: z.boolean().optional(),
            doc_type: z.string(),
            num_doc: z.coerce.number(),
            trans_mode: z.string(),
            name: z.string(),
            matricule: z.string(),
            faculty: z.string(),
            department: z.string(),
            level: z.string(),
            delivrable_id: z.number(),
            mode_id: z.number(),
            payment_mode: z.string(),
            phone: z.coerce
                .number()
                .min(9, 'Contact must be at least 9 characters long'),
        }),
        date: z.date(),
        time: z.string().optional().nullable(),
    }),
)

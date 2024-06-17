import { z } from 'zod'

export const documentRequestSchema = z.object({
    my_school: z.string(),
    doc_type: z.string({
        required_error: 'Please select a document type',
    }),
    num_doc: z.coerce.number({
        required_error: 'Enter number of document',
    }),
    trans_mode: z.string({
        required_error: 'Please select a transcript mode',
    }),
    name: z
        .string()
        .min(3, {
            message: 'Name must be at least 3 characters.',
        })
        .refine((value) => !/\d/.test(value), 'Name cannot contain digits'),
    matricule: z.string({
        required_error: 'Enter your Matriculation number',
    }),
    faculty: z.string({
        required_error: 'Please select your faculty',
    }),
    department: z.string({
        required_error: 'Please select your department',
    }),
    level: z.string({
        required_error: 'Please select your Level',
    }),
    payment_mode: z.string({
        required_error: 'Please select a payment method',
    }),
    phone: z.coerce
        .number()
        .min(9, 'Contact must be at least 9 characters long'),
})

import { z } from 'zod'

export const signupSchema = z
    .object({
        username: z.string().min(2, {
            message: 'Username must be at least 2 characters.',
        }),
        phone: z.coerce.number(),
        email: z.string().email(),
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
        confirm_password: z
            .string()
            .min(8, 'Confirm password must be at least 8 characters long'),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: 'Passwords do not match',
        path: ['confirm_password'],
    })

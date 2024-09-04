import { z } from 'zod'

export const withdrawSchema = z.object({
    amount: z.coerce
        .number()
        .min(1000, 'Minimum withdrawal amount is 1000 XAF'),
    payment_mode: z.string({
        required_error: 'Please select a payment method',
    }),
    number: z.coerce
        .string()
        .min(9, 'Contact must be at least 9 characters long'),
})

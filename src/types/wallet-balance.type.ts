import { z } from 'zod'

export const walletBalanceSchema = z.object({
    balance: z.number(),
    max_withdraw: z.string(),
    min_withdraw: z.string(),
})

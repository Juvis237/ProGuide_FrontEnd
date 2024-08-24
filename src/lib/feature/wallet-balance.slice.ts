import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { walletBalanceSchema } from '@/types/wallet-balance.type'

// Infer the WalletBalanceType from the schema
type WalletBalanceType = z.infer<typeof walletBalanceSchema>

interface WalletBalanceState {
    walletBalanceData: WalletBalanceType | null
}

const initialState: WalletBalanceState = {
    walletBalanceData: null,
}

const walletBalanceSlice = createSlice({
    name: 'walletBalance',
    initialState,
    reducers: {
        setWalletBalanceData: (
            state,
            action: PayloadAction<WalletBalanceType | null>,
        ) => {
            state.walletBalanceData = action.payload
        },
    },
})

export const { setWalletBalanceData } = walletBalanceSlice.actions

export default walletBalanceSlice.reducer

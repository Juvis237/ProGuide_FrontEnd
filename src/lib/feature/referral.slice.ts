import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { referralSchema } from '@/types/referral.type'

// Infer the ReferralType from the schema
type ReferralType = z.infer<typeof referralSchema>

interface ReferralState {
    referralData: ReferralType[] | null
}

const initialState: ReferralState = {
    referralData: null,
}

const referralSlice = createSlice({
    name: 'referral',
    initialState,
    reducers: {
        setReferralData: (
            state,
            action: PayloadAction<ReferralType[] | null>,
        ) => {
            state.referralData = action.payload
        },
    },
})

export const { setReferralData } = referralSlice.actions

export default referralSlice.reducer

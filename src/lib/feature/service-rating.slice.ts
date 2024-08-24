import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { serviceRatingSchema } from '@/types/service-rating.type'

// Infer the serviceRatingType from the schema
type ServiceRatingType = z.infer<typeof serviceRatingSchema>
interface ServiceRatingState {
    rating: ServiceRatingType | null
}

const initialState: ServiceRatingState = {
    rating: null,
}

const serviceRatingSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth user
        setRating: (state, action: PayloadAction<ServiceRatingType | null>) => {
            state.rating = action.payload
        },
    },
})

//!user instance
export const { setRating } = serviceRatingSlice.actions

export default serviceRatingSlice.reducer

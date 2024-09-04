import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { userSchema } from '@/types/user.slice'

// Infer the UserType from the schema
type UserType = z.infer<typeof userSchema>
interface UserState {
    user: UserType | null
}

const initialState: UserState = {
    user: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth user
        setUser: (state, action: PayloadAction<UserType | null>) => {
            state.user = action.payload
        },
    },
})

//!user instance
export const { setUser } = userSlice.actions

export default userSlice.reducer

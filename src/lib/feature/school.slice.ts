import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { schoolSchema } from '@/types/school.types'

// Infer the SchoolType from the schema
type SchoolType = z.infer<typeof schoolSchema>
interface SchoolState {
    school: SchoolType | null
}

const initialState: SchoolState = {
    school: null,
}

const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth school
        setSchool: (state, action: PayloadAction<SchoolType | null>) => {
            state.school = action.payload
        },
    },
})

//!school instance
export const { setSchool } = schoolSlice.actions

export default schoolSlice.reducer

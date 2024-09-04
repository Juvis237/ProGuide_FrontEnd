import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { documentRequestSchema } from '@/types/request.type'

// Infer the SchoolType from the schema
type FormDataType = z.infer<typeof documentRequestSchema>
interface FormData {
    formData: FormDataType | {}
}

const initialState: FormData = {
    formData: {},
}

const formDataSlice = createSlice({
    name: 'documentRequest',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth school
        setFormData: (state, action: PayloadAction<FormDataType | {}>) => {
            state.formData = action.payload
        },
    },
})

//!school instance
export const { setFormData } = formDataSlice.actions

export default formDataSlice.reducer

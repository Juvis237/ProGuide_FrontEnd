import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { documentRequestDataSchema } from '@/types/request-data.type'

// Infer the SchoolType from the schema
type DocumentRequestType = z.infer<typeof documentRequestDataSchema>
interface RequestDocsState {
    documentRequest: DocumentRequestType | null
}

const initialState: RequestDocsState = {
    documentRequest: [],
}

const documentRequestSlice = createSlice({
    name: 'documentRequest',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth school
        setDocumentRequest: (
            state,
            action: PayloadAction<DocumentRequestType | []>,
        ) => {
            state.documentRequest = action.payload
        },
    },
})

//!school instance
export const { setDocumentRequest } = documentRequestSlice.actions

export default documentRequestSlice.reducer

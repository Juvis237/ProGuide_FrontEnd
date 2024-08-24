import { createDocumentRequestSchema } from '@/types/document-request-type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

// Infer the SchoolType from the schema
type DocumentCreatedType = z.infer<typeof createDocumentRequestSchema>
interface DocumentCreatedState {
    createDocument: DocumentCreatedType | {}
}

const initialState: DocumentCreatedState = {
    createDocument: {},
}

const createDocumentSlice = createSlice({
    name: 'createDocument',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth school
        setCreateDocument: (
            state,
            action: PayloadAction<DocumentCreatedState | {}>,
        ) => {
            state.createDocument = action.payload
        },
    },
})

//!school instance
export const { setCreateDocument } = createDocumentSlice.actions

export default createDocumentSlice.reducer

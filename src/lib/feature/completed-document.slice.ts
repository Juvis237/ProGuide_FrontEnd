import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { documentRequestDataSchema } from '@/types/request-data.type'

// Infer the DocumentRequestType from the schema
type DocumentRequestType = z.infer<typeof documentRequestDataSchema>

interface RequestDocsState {
    completedDocumentRequest: DocumentRequestType // Update the type to be an array of completed documents
}

const initialState: RequestDocsState = {
    completedDocumentRequest: [],
}

const completedDocumentRequestSlice = createSlice({
    name: 'documentRequest',
    initialState,
    reducers: {
        // State handle to filter and store only completed documents
        setCompletedDocumentRequest: (
            state,
            action: PayloadAction<DocumentRequestType>,
        ) => {
            state.completedDocumentRequest = action.payload.filter(
                (document) => document.status === 'completed',
            )
        },
    },
})

// Export actions and reducer
export const { setCompletedDocumentRequest } =
    completedDocumentRequestSlice.actions
export default completedDocumentRequestSlice.reducer

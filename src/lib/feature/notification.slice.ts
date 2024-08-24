import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'
import { userNotificationSchema } from '@/types/notification.type'

// Infer the userNotificationType from the schema
type userNotificationType = z.infer<typeof userNotificationSchema>

interface RequestDocsState {
    userNotification: userNotificationType | null // Update the type to be an array of completed documents
}

const initialState: RequestDocsState = {
    userNotification: null,
}

const userNotificationSlice = createSlice({
    name: 'documentRequest',
    initialState,
    reducers: {
        // State handle to filter and store only completed documents
        setUserNotification: (
            state,
            action: PayloadAction<userNotificationType>,
        ) => {
            state.userNotification = action.payload
        },
    },
})

// Export actions and reducer
export const { setUserNotification } = userNotificationSlice.actions
export default userNotificationSlice.reducer

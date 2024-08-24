import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/user.slice'
import schoolReducer from './feature/school.slice'
import documentRequestReducer from './feature/request-data.slice'
import operatorReducer from './feature/operator.slice'
import createDocumentReducer from './feature/create-document.slice'
import formDataReducer from './feature/form-data.slice'
import referralReducer from './feature/referral.slice'
import walletBalanceReducer from './feature/wallet-balance.slice'
import completedDocumentReducer from './feature/completed-document.slice'
import userNotificationReducer from './feature/notification.slice'
import useServiceRatingReducer from './feature/service-rating.slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            school: schoolReducer,
            documentRequest: documentRequestReducer,
            operator: operatorReducer,
            createDocument: createDocumentReducer,
            formData: formDataReducer,
            referralData: referralReducer,
            walletBalance: walletBalanceReducer,
            completeDocument: completedDocumentReducer,
            userNotification: userNotificationReducer,
            serviceRating: useServiceRatingReducer,
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

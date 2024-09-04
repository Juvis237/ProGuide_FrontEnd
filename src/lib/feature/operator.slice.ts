import { operatorSchema } from '@/types/operator.type'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { z } from 'zod'

// Infer the SchoolType from the schema
type OperatorType = z.infer<typeof operatorSchema>
interface OperatorState {
    operator: OperatorType | {}
}

const initialState: OperatorState = {
    operator: {},
}

const operatorSlice = createSlice({
    name: 'operator',
    initialState,
    reducers: {
        //! state handle if auth is successful return auth school
        setOperator: (state, action: PayloadAction<OperatorState | {}>) => {
            state.operator = action.payload
        },
    },
})

//!school instance
export const { setOperator } = operatorSlice.actions

export default operatorSlice.reducer

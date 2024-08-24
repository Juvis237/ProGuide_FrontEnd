import { stepIndicatorSchema } from '@/types/indicator'
import React from 'react'
import { z } from 'zod'

const StepIndicator = ({
    currentStep,
    steps,
    userExists,
}: z.infer<typeof stepIndicatorSchema>) => {
    const totalSteps = steps.length

    // const stepStatus = Array.from({ length: totalSteps }, (_, i) => {
    //     if (i < currentStep) return 'completed'
    //     if (i === currentStep) return 'current'
    //     return 'pending'
    // })

    // const filteredSteps =
    //     userExists && true ? steps.filter((_, index) => index !== 2) : steps
    return (
        <div className="flex items-center justify-center text-center text-secondary pb-2">
            <div>
                {' '}
                Step {currentStep + 1} of {totalSteps}
            </div>
        </div>
    )
}

export default StepIndicator

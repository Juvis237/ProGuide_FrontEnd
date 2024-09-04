import SignupForm from '@/components/sign-up-form/SignupForm'
import React, { Suspense } from 'react'

const page = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SignupForm />
        </Suspense>
    )
}

export default page

import React from 'react'
import AppLayout from '../AppLayout'
import RequestContainer from '@/components/request-container/RequestContainer'

const page = () => {
    return (
        <AppLayout>
            <RequestContainer />
            {/* <div className="px-4"></div> */}
        </AppLayout>
    )
}

export default page

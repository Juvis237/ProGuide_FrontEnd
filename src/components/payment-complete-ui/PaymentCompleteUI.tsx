'use client'

import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'

interface Props {
    setViewRequestDetail: Dispatch<SetStateAction<boolean>>
}

const PaymentCompleteUI: React.FC<Props> = ({ setViewRequestDetail }) => {
    const toggleState = () => {
        if (setViewRequestDetail) {
            setViewRequestDetail(true)
        }
    }
    return (
        <div className="text-center flex justify-center gap-4 items-center flex-col">
            <Image
                src={'/assets/pana.svg'}
                width={100}
                height={35}
                alt={`payment complete image`}
            />
            <p className="text-lg font-bold">
                Once again, thank you for trusting Pro-Delivery
            </p>
            <p className="text-center">
                Your payment has been completed. Check your dashboard for
                updates concerning your request
            </p>
            <Button className="bg-secondary py-5 px-3" onClick={toggleState}>
                See request details
            </Button>
        </div>
    )
}

export default PaymentCompleteUI

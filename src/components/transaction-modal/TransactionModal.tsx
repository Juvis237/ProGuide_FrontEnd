import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const TransactionModal = () => {
    return (
        <div className="flex justify-center items-center flex-col max-w-[350px] py-8 px-4 box-shadow gap-3 rounded-md">
            <div className="self-end cursor-pointer">
                <XMarkIcon className="h-6 w-6 text-black" />
            </div>
            <div className="h-[4.5rem] w-[4.5rem]">
                <Image
                    src={'/assets/verify-mark.png'}
                    width={1000}
                    height={35}
                    alt="check mark"
                />
            </div>
            <h3 className="font-bold py-3">Transaction successful!</h3>
            <p className="text-center text-[0.875rem]">
                You ve successfully made a withdrawal of XAF20,000 from your Pro
                Guide account! Enjoy
            </p>
            <div className="flex justify-between w-full">
                <Button
                    variant={'outline'}
                    className="hover:bg-white hover:text-black"
                >
                    Go back
                </Button>
                <Button className="bg-accent">See history</Button>
            </div>
        </div>
    )
}

export default TransactionModal

import React from 'react'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'

const RequestNow = () => {
    return (
        <div className="request-now-bg px-4 mt-8 flex justify-center items-center min-h-[250px] flex-col relative">
            <Image
                src={'/assets/onboarding-CTA-bg.png'}
                width={1000}
                height={10000}
                alt="request-image"
                className="relative w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col px-8 justify-center items-center w-full">
                <Header
                    title="Want to place a request or become an agent?"
                    classes="text-secondary font-bold text-xl text-center"
                />
                <Paragraph
                    content="Delve into a world od little or no stress and have unforgettable experience"
                    classes="text-center text-sm"
                />
                <Button className="text-white bg-secondary p-6" asChild>
                    <Link href={'/get-started'}>Get Started</Link>
                </Button>
            </div>
        </div>
    )
}

export default RequestNow

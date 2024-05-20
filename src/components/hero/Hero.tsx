import React from 'react'
import Image from 'next/image'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center w-full mt-6 p-4">
            <Image
                src={'/assets/welcome-img.png'}
                width={1000}
                height={1000}
                alt="hero image"
                className=""
            />
            <Header
                title="Welcome to Pro-Delivery"
                classes="text-center mt-4 text-3xl font-bold text-muted"
            />
            <Paragraph
                content="Skip the lines and manage everything from your phone. Request, track and manage all your academic documents."
                classes="px-0 text-center"
            />
        </div>
    )
}

export default Hero

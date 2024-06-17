import React from 'react'
import Image from 'next/image'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'

const Hero = () => {
    return (
        <div className="flex flex-col justify-center md:justify-between items-center w-full mt-6 p-4 md:p-8 md:flex-row">
            <div className="w-[50%]">
                <Image
                    src={'/assets/welcome-img.svg'}
                    width={1000}
                    height={1000}
                    alt="hero image"
                />
            </div>
            <div className="">
                <Header
                    title="Welcome to Pro-Delivery"
                    classes="text-center mt-4 text-3xl font-bold text-muted"
                />
                <Paragraph
                    content="Skip the lines and manage everything from your phone. Request, track and manage all your academic documents."
                    classes="px-0 text-center md:text-right md:max-w-96"
                />
            </div>
        </div>
    )
}

export default Hero

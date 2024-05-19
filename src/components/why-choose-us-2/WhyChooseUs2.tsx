import Image from 'next/image'
import React from 'react'

const WhyChooseUs2 = () => {
    return (
        <div>
            <section className="relative px-4">
                <div className="absolute inset-0">
                    <Image
                        src={'/assets/journey with us-bg@2x.png'}
                        height={1000}
                        width={1000}
                        alt="journey with us bg"
                        className="absolute inset-0"
                    />
                    <Image
                        src={'/assets/journey with us- img1@2x.png'}
                        height={50}
                        width={250}
                        alt="journey with us bg"
                        className="absolute right-0 mt-4 mr-4"
                    />
                    <Image
                        src={'/assets/journey with us- img2@2x.png'}
                        height={50}
                        width={250}
                        alt="journey with us bg"
                        className="absolute inset-0 ml-4 mt-[10rem]"
                    />
                </div>
                <h3 className="text-secondary font-light text-[0.75rem]">
                    JOURNEY WITH US
                </h3>
                <h4 className="text-muted font-bold text-xl">
                    Let us take the stress <br /> for you!
                </h4>
            </section>
        </div>
    )
}

export default WhyChooseUs2

import Image from 'next/image'
import React from 'react'

const WhyChooseUs2 = () => {
    return (
        <div>
            <section className="relative px-4">
                <div className="mb-4">
                    <Image
                        src={'/assets/journey with us-img.svg'}
                        height={1000}
                        width={1000}
                        alt="journey with us bg"
                        className=""
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

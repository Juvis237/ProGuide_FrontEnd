import Image from 'next/image'
import React from 'react'

interface Props {
    imageSrc: string
}

const OptionIcon: React.FC<Props> = ({ imageSrc }) => {
    return (
        <section className="w-full rounded-xl p-3 flex items-center justify-center bg-white box-shadow cursor-pointer">
            <Image
                src={imageSrc}
                height={50}
                width={100}
                alt="social-icon"
                className="w-8 h-8"
            />
        </section>
    )
}

export default OptionIcon

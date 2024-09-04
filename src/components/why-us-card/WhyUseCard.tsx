import Image from 'next/image'
import React from 'react'
import Paragraph from '../paragraph/Paragraph'

interface Props {
    imgSrc: string
    title: string
    content: string
}

const WhyUseCard: React.FC<Props> = ({ imgSrc, title, content }) => {
    return (
        <div className="flex flex-col p-4 mt-6 md:px-8 md:py-10 bg-white rounded-xl max-w-[320px] md:max-w-full md:box-shadow  md:mb-8">
            <Image src={imgSrc} width={35} height={100} alt="card-icon" />
            <h3 className="font-bold text-xl pt-6 pb-2">{title}</h3>
            <Paragraph content={content} classes="text-left text-sm" />
        </div>
    )
}

export default WhyUseCard

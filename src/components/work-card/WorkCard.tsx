import Image from 'next/image'
import React from 'react'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
interface Props {
    imgSrc: string
    title: string
    content: string
}

const WorkCard: React.FC<Props> = ({ imgSrc, title, content }) => {
    return (
        <div className="flex gap-6 justify-center">
            <Image
                src={imgSrc}
                width={35}
                height={100}
                alt="work number count"
                className="w-6 h-6"
            />
            <div>
                <Header title={title} classes="font-bold text-white" />
                <Paragraph content={content} classes="text-white text-sm" />
            </div>
        </div>
    )
}

export default WorkCard

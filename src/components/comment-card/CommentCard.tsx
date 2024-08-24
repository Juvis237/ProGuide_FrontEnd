import { StarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

interface Props {
    name: string
    comment: string
    commentDate: string
    imageSrc: string
    stars: number
}

const CommentCard: React.FC<Props> = ({
    name,
    commentDate,
    comment,
    imageSrc,
    stars,
}) => {
    const maxStars = 5
    const starsArray = Array.from({ length: maxStars })

    return (
        <div className="flex flex-col gap-y-4 box-shadow p-4 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-x-3">
                    <div className="w-10 h-10 rounded-full">
                        <Image width={100} height={100} alt="" src={imageSrc} />
                    </div>
                    <div className="flex flex-col">
                        <h4 className="text-[0.8rem]">{name}</h4>
                        <div className="flex">
                            {starsArray.map((_, index) => (
                                <StarIcon
                                    key={index}
                                    className={`w-4 h-4 ${index < stars ? 'text-secondary' : 'text-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <small>{commentDate}</small>
            </div>
            <p className="text-[0.8rem]">{comment}</p>
        </div>
    )
}

export default CommentCard

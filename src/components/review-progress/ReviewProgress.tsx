import { StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const ReviewProgress = () => {
    const maxStars = 5
    const starsArray = Array.from({ length: maxStars })
    return (
        <div>
            {starsArray.map((_, index) => (
                <div className="flex items-center justify-between" key={index}>
                    <div className="flex items-center gap-1">
                        <span>{starsArray.length - index}</span>
                        <span>
                            <StarIcon className={`w-5 h-5 text-gray-300`} />
                        </span>
                    </div>
                    <div className="w-[80%] border rounded-2xl h-3 bg-secondary"></div>
                    <span>12</span>
                </div>
            ))}
        </div>
    )
}

export default ReviewProgress

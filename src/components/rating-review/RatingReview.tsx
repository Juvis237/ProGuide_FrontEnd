import React from 'react'
import ReviewProgress from '../review-progress/ReviewProgress'
import Image from 'next/image'
import Header from '../header/Header'
import { StarIcon } from '@heroicons/react/24/outline'

const RatingReview = () => {
    const maxStars = 5
    const starsArray = Array.from({ length: maxStars })
    return (
        <div>
            <h3 className="pb-3 text-muted font-bold">Ratings</h3>
            <div className="flex justify-between gap-3">
                <div className="request-now-bg flex justify-center items-center flex-col relative">
                    <Image
                        src={'/assets/onboarding-CTA-bg.png'}
                        width={100}
                        height={50}
                        alt="request-image"
                        className="relative w-full h-full"
                    />
                    <div className="absolute inset-0 flex flex-col px-8 justify-center items-center w-full font-bold">
                        <Header title="4" classes="text-2xl" />
                        of 5
                    </div>
                    <div className="flex">
                        {starsArray.map((_, index) => (
                            <StarIcon
                                key={index}
                                className={`w-5 h-5 text-secondary`}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-3/4">
                    <ReviewProgress />
                </div>
            </div>
        </div>
    )
}

export default RatingReview

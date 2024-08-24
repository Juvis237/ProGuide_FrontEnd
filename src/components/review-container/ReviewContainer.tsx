'use client'
import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import CommentContainer from '../comment-container/CommentContainer'
import RatingReview from '../rating-review/RatingReview'
import { useAppSelector } from '@/lib/hook'

const ReviewContainer = () => {
    const userData = useAppSelector((state) => state.user.user)
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Reviews"
                link="/"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-1/2 pb-32 px-4 rounded-t-3xl">
                    <RatingReview />
                    <CommentContainer />
                </section>
            </div>
        </section>
    )
}

export default ReviewContainer

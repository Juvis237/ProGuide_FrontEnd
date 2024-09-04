import React from 'react'
import { comments } from '../../../data'
import CommentCard from '../comment-card/CommentCard'

const CommentContainer = () => {
    return (
        <div>
            <h3 className="py-3 text-muted font-bold">Comments</h3>
            <div className="flex flex-col gap-4">
                {comments.map((el, index) => (
                    <CommentCard
                        key={index}
                        name={el.name}
                        stars={el.stars}
                        comment={el.comment}
                        commentDate={el.commentDate}
                        imageSrc={el.imgSrc}
                    />
                ))}
            </div>
        </div>
    )
}

export default CommentContainer

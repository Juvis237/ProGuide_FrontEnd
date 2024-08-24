import React from 'react'
import Paragraph from '../paragraph/Paragraph'
import { CalendarIcon } from '@heroicons/react/24/outline'
import moment from 'moment'

interface Props {
    title: string
    description: string
    time: string
}

const NotificationCard: React.FC<Props> = ({ title, description, time }) => {
    const daysDifference = moment().diff(moment(time), 'days')
    let formattedDate

    if (daysDifference > 6) {
        formattedDate = moment(time).format('Do MMMM YYYY')
    } else {
        formattedDate = moment(time).fromNow()
    }
    return (
        <div className="flex flex-col border-b pb-3 cursor-pointer">
            <h3 className="font-bold mt-3">{title}</h3>
            <Paragraph content={description} classes="text-[0.8rem]" />
            <div className="self-end">
                <div className="flex gap-2 items-center">
                    <CalendarIcon className="w-5 h-5" />
                    <small className="text-[0.65rem]">{formattedDate}</small>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard

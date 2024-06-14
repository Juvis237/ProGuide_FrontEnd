import React from 'react'
import Paragraph from '../paragraph/Paragraph'

interface Props {
    title: string
    description: string
    time: string
    Icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined
            titleId?: string | undefined
        } & React.RefAttributes<SVGSVGElement>
    >
}

const NotificationCard: React.FC<Props> = ({
    title,
    description,
    time,
    Icon,
}) => {
    return (
        <div className="flex flex-col border-b pb-3 cursor-pointer">
            <h3 className="font-bold mt-3">{title}</h3>
            <Paragraph content={description} classes="text-[0.8rem]" />
            <div className="self-end">
                <div className="flex gap-3 items-center">
                    <Icon className="w-5 h-5" />
                    <small className="text-[0.65rem]">{time}</small>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard

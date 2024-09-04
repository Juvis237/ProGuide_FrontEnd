import React from 'react'
import Timeline from '@mui/lab/Timeline'
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    timelineItemClasses,
} from '@mui/lab/'
import { statusReport } from '../../../data'

interface TimeLineProp {
    index: number
    status: string
    separator: String[]
}

const TimelineUI: React.FC<TimeLineProp> = ({ index, separator, status }) => {
    const isCurrentOrBelow =
        status === separator[index] || separator.indexOf(status) >= index

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            <TimelineItem>
                {index === separator.length - 1 ? (
                    <TimelineDot
                        className={`${isCurrentOrBelow ? 'bg-secondary' : 'bg-grey'}`}
                    />
                ) : (
                    <TimelineSeparator>
                        <TimelineDot
                            className={`${isCurrentOrBelow ? 'bg-secondary' : 'bg-grey'}`}
                        />
                        <TimelineConnector
                            className={`${isCurrentOrBelow ? 'bg-secondary' : 'bg-grey'}`}
                        />
                    </TimelineSeparator>
                )}
                <TimelineContent
                    className={`${status === separator[index] ? 'text-gray-500 font-normal' : null} text-sm`}
                >
                    {statusReport[index]}
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default TimelineUI

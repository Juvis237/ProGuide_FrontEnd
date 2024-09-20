import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

interface RequestData {
    id: string // Change type to number to match requestData
    status: string
    available_status: string[]
    delivrable?: {
        name?: string
    }
}

interface RequestCardProps {
    request: RequestData
}

const AgentRequestCard: React.FC<RequestCardProps> = ({ request }) => {
    return (
        <div className="w-full rounded-2xl box-shadow flex flex-col p-4 mb-3">
            <div className="flex justify-between border-b-2 pb-4 w-full">
                <div>
                    <h4>{request.delivrable?.name || 'No Title'}</h4>{' '}
                    {/* Adjust for missing title */}
                    <span className="text-muted text-[0.75rem] font-medium">
                        ID: {request.id}
                    </span>
                </div>
                <div>
                    <p className="text-secondary font-medium">
                        {request.status}{' '}
                        {/* Adjust to show status instead of price */}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button className="self-start mt-4 py-6 bg-[#FF000021] hover:bg-[#FF000021] text-[#E50000]">
                    <span className="flex text-[#E50000] cursor-pointer pr-2">
                        <XMarkIcon className="w-5 h-5" />
                    </span>
                    Decline
                </button>
                <button className="self-end py-6 mt-4 text-[#002D81] hover:bg-[#E6EAF2] bg-[#E6EAF2]">
                    <span className="flex text-[#002D81] cursor-pointer pr-2">
                        <CheckIcon className="w-5 h-5" />
                    </span>
                    Accept
                </button>
            </div>
        </div>
    )
}

export default AgentRequestCard

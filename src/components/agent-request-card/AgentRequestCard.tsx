import { CheckBadgeIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { z } from 'zod'
import { Button } from '../ui/button'
import { documentRequestDataCardSchema } from '@/types/request-data-card.type'

type DocumentRequestType = z.infer<typeof documentRequestDataCardSchema>

interface RequestData {
    id: string
    status: string
    price: string
    title: string // or string, depending on your actual data type
    // Add other properties if necessary
}

interface RequestCardProps {
    request: DocumentRequestType
}

const AgentRequestCard: React.FC<RequestCardProps> = ({ request }) => {
    return (
        <div className={`w-full rounded-2xl box-shadow flex flex-col p-4 mb-3`}>
            <div className="flex justify-between border-b-2 pb-4 w-full">
                <div>
                    <h4>{request.title}</h4>
                    <span className="text-muted text-[0.75rem] font-medium">
                        ID: {request.id}
                    </span>
                </div>
                <div>
                    <p className={`text-secondary font-medium`}>
                        {request.price}
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <Button
                    className="self-start mt-4 py-6 bg-[#FF000021] hover:bg-[#FF000021] text-[#E50000]"
                    // onClick={() => showDelModal(item.id)}
                >
                    <span className="flex text-[#E50000] cursor-pointer pr-2">
                        <XMarkIcon className="w-5 h-5" />
                    </span>
                    Deline
                </Button>
                <Button
                    className="self-end py-6 mt-4 text-[#002D81] hover:bg-[#E6EAF2] bg-[#E6EAF2]"
                    // onClick={() => handleCardRedirect(item.id.slice(1))}
                >
                    <span className="flex text-[#002D81] cursor-pointer pr-2">
                        <CheckIcon className="w-5 h-5" />
                    </span>
                    Accept
                </Button>
            </div>
        </div>
    )
}

export default AgentRequestCard

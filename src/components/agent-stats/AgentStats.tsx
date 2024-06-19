import { DocumentIcon, StarIcon } from '@heroicons/react/24/outline'
import React from 'react'

const AgentStats = () => {
    return (
        <div className="flex justify-between items-center gap-4 h-full my-4">
            <div className="bg-white box-shadow flex flex-col justify-center items-center px-4 sm:px-6 py-5 gap-2 w-full h-auto rounded-2xl">
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-foreground flex items-center justify-center">
                        <StarIcon className="text-secondary h-6 w-6" />
                    </div>
                    <small className="">
                        <p className="text-xl font-bold">0</p>
                        <p className="text-[0.65rem]">0 ratings</p>
                    </small>
                </div>
                <small className="text-[0.75rem] sm:text-sm font-medium">
                    Total Rating
                </small>
            </div>
            <div className="bg-white box-shadow flex flex-col justify-center items-center px-4 sm:px-6 py-5 gap-2 w-full h-auto rounded-2xl">
                <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary-foreground flex items-center justify-center">
                        <DocumentIcon className="text-secondary h-6 w-6" />
                    </div>
                    <p className="text-2xl font-bold">29</p>
                </div>
                <small className="text-[0.75rem] sm:text-sm font-medium">
                    Processed Documents
                </small>
            </div>
        </div>
    )
}

export default AgentStats

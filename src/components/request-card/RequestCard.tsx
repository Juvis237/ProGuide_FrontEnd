import React from 'react'
import { Button } from '../ui/button'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { requestData } from '../../../data'

const RequestCard = () => {
    return (
        <div>
            {requestData.map((item, index) => (
                <div
                    key={index}
                    className={`w-full rounded-2xl box-shadow flex flex-col p-4 mb-3`}
                >
                    <div className="flex justify-between border-b pb-4 w-full">
                        <div>
                            <h4>{item.title}</h4>
                            <span className="font-bold">ID: {item.id}</span>
                        </div>
                        <div>
                            <Button
                                variant="ghost"
                                className={`${item.status === 'completed' ? 'bg-primary-foreground text-primary hover:bg-primary' : 'bg-accent-foreground text-accent '} py-6 px-8 rounded-3xl`}
                            >
                                {item.status}
                            </Button>
                        </div>
                    </div>
                    <div className="self-end py-2 pt-4">
                        <span className="flex text-secondary-foreground cursor-pointer">
                            see request details
                            <ChevronDownIcon className="w-6 h-6 ml-2" />
                        </span>
                    </div>
                </div>
            ))}
            <div className="flex justify-end mb-[12rem]">
                <Button
                    variant={'ghost'}
                    className="flex text-secondary cursor-pointer hover:bg-transparent hover:text-secondary"
                >
                    See more
                    <ChevronDownIcon className="w-6 h-6 ml-2" />
                </Button>
            </div>
        </div>
    )
}

export default RequestCard

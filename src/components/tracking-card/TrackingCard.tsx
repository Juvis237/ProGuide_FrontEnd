'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { documentRequestDataCardSchema } from '@/types/request-data-card.type'
import { z } from 'zod'
import TimelineUI from '../time-line/Timeline'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import RatingModal from '../rating-modal/RatingModal'
import { useAppSelector } from '@/lib/hook'

type DocumentRequestType = z.infer<typeof documentRequestDataCardSchema>

interface RequestData {
    id: string
    status: string
    title: string // or string, depending on your actual data type
    available_status?: []
    // Add other properties if necessary
}
interface RequestData2 {
    id: string
    status: string
    title: string // or string, depending on your actual data type
    // Add other properties if necessary
}

interface TrackingCardProps {
    requests: DocumentRequestType
}

const TrackingCard: React.FC<TrackingCardProps> = ({ requests }) => {
    const [documentRating, setDocumentRating] = useState<boolean>(false)
    const [documentId, setDocumentId] = useState<string>('')
    const [ratingConfirmed, setRatingConfirmed] = useState<boolean>(false)
    const rating = useAppSelector((state) => state.serviceRating.rating)
    const showDelModal = (id: string) => {
        setDocumentRating(true)
        setDocumentId(id)
    }

    const hideDelModal = () => {
        setDocumentRating(false)
    }

    const confirmRating = async (requestData: RequestData2[]) => {
        // Ensure getDeletion is defined before proceeding
        if (!documentId) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: `Could not find document with ${documentId}.`,
            })
            return
        }

        try {
            const request = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/rate_request`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        request_id: documentId,
                        comment: rating && rating?.comment,
                        rating: rating && rating?.numberOfStar,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                    },
                },
            )

            const response = await request.json()
            const { message, success } = response

            setDocumentRating(true)
            setRatingConfirmed(true)

            if (success) {
                toast({
                    variant: 'default',
                    title: 'Rating Successfully Submitted',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                setDocumentRating(false)
                setRatingConfirmed(false)
            } else {
                setDocumentRating(false)
                setRatingConfirmed(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error Rating Document',
                description: <ToastDescription description={`${error}`} />,
            })
        }
    }

    if (requests.length === 0) {
        return (
            <div className="w-full">
                <h4 className="font-bold text-xl text-center">
                    No documents found
                </h4>
            </div>
        )
    }

    const requestData = requests.map((item) => ({
        title: item.delivrable?.name || 'Unknown',
        id: `#${item.id}`,
        status: item.status,
        available_status: item.available_status,
    }))

    return (
        <div>
            {requestData.map((el, index) => (
                <div key={index} className="flex flex-col gap-y-3">
                    <div
                        className={`w-full rounded-2xl box-shadow flex flex-col p-4 mb-3`}
                    >
                        <div className="flex justify-between border-b pb-4 w-full">
                            <div>
                                <h4 className="font-bold text-sm">
                                    {el.title}
                                </h4>
                                <span className="text-muted text-[0.75rem]">
                                    ID: {el.id}
                                </span>
                            </div>
                            <div>
                                <Button
                                    variant="ghost"
                                    className={`bg-secondary-foreground-card text-secondary hover:bg-secondary py-6 px-8 rounded-3xl`}
                                >
                                    {el.status}
                                </Button>
                            </div>
                        </div>
                        <div className="mt-3">
                            {el.available_status &&
                                el.available_status.map((data, index) => (
                                    <TimelineUI
                                        key={index}
                                        index={index}
                                        status={el.status}
                                        separator={el.available_status}
                                    />
                                ))}
                            <div className="flex justify-end mt-1">
                                <Button
                                    variant={'default'}
                                    className={`flex text-white cursor-pointer bg-secondary hover:bg-secondary`}
                                    onClick={() => showDelModal(el.id.slice(1))}
                                >
                                    Rate Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {documentRating ? (
                <RatingModal
                    hideModal={hideDelModal}
                    confirmAction={() => confirmRating(requestData)}
                    confirmDisabled={ratingConfirmed}
                    id={documentId}
                    header="How would you like to 
rate this service?"
                />
            ) : null}
        </div>
    )
}

export default TrackingCard

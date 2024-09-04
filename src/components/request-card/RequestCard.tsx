'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronDownIcon, TrashIcon } from '@heroicons/react/24/outline'
import { z } from 'zod'
import { documentRequestDataCardSchema } from '@/types/request-data-card.type'
import { useRouter } from 'next/navigation'
import Modal from '../modal/Modal'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import { setDocumentRequest } from '@/lib/feature/request-data.slice'
import { useAppDispatch } from '@/lib/hook'

type DocumentRequestType = z.infer<typeof documentRequestDataCardSchema>

interface RequestData {
    id: string
    status: string
    title: string // or string, depending on your actual data type
    // Add other properties if necessary
}

interface RequestCardProps {
    requests: DocumentRequestType
}

const RequestCard: React.FC<RequestCardProps> = ({ requests }) => {
    const dispatch = useAppDispatch()
    const [documentDelete, setDocumentDelete] = useState<boolean>(false)
    const [deleteIndex, setDeleteIndex] = useState<string>('')
    const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false)
    const router = useRouter()
    const showDelModal = (id: string) => {
        setDocumentDelete(true)
        setDeleteIndex(id)
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

    // Extract and format request data
    const requestData = requests.map((item) => ({
        title: item.delivrable?.name || 'Unknown',
        id: `#${item.id}`,
        status: item.status,
    }))

    const handleCardRedirect = (id: string) => {
        router.push(`/dashboard/${id}`)
    }

    const hideDelModal = () => {
        setDocumentDelete(false)
    }

    const fetchDocumentRequested = async () => {
        const req = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/requests`,
            {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                },
            },
        )

        const res = await req.json()
        const { requests } = res
        dispatch(setDocumentRequest(requests))
    }

    const confirmDelete = async (requestData: RequestData[]) => {
        const getDeletion = requestData.find((el) => el.id === deleteIndex)
        try {
            if (getDeletion) {
                const request = await fetch(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/requests/delete_request/${getDeletion.id.slice(1)}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                        },
                    },
                )
                const response = await request.json()
                const { message, success } = response
                setDocumentDelete(true)
                setDeleteConfirmed(true)
                if (success) {
                    toast({
                        variant: 'default',
                        title: 'Document Deleted Successful',
                        description: (
                            <ToastDescription description={`${message}`} />
                        ),
                    })
                    setDocumentDelete(false)
                    setDeleteConfirmed(false)
                }
                fetchDocumentRequested()
                setDocumentDelete(false)
                setDeleteConfirmed(false)
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error  Deleting Document',
                description: <ToastDescription description={`${error}`} />,
            })
        }
    }

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
                                className={`${item.status === 'completed' && 'bg-primary-foreground text-primary hover:bg-primary'} ${item.status === 'in progress' && 'bg-accent-foreground text-accent hover:bg-accent'} ${item.status === 'pending' && 'bg-secondary-foreground-card text-secondary hover:bg-secondary'} py-6 px-8 rounded-3xl`}
                            >
                                {item.status}
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div
                            className=" self-start pt-4"
                            onClick={() => showDelModal(item.id)}
                        >
                            <span className="flex text-red-500 cursor-pointer">
                                <TrashIcon className="w-6 h-6 ml-2" />
                            </span>
                        </div>
                        <div
                            className="self-end py-2 pt-4"
                            onClick={() => handleCardRedirect(item.id.slice(1))}
                        >
                            <span className="flex text-secondary-foreground cursor-pointer">
                                see request details
                                <ChevronDownIcon className="w-6 h-6 ml-2" />
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-end mb-[12rem]">
                <Button
                    variant={'ghost'}
                    className={`flex text-secondary cursor-pointer hover:bg-transparent hover:text-secondary ${requests.length === 0 && 'hidden'}`}
                >
                    See more
                    <ChevronDownIcon className="w-6 h-6 ml-2" />
                </Button>
            </div>
            {documentDelete ? (
                <Modal
                    hideModal={hideDelModal}
                    confirmAction={() => confirmDelete(requestData)}
                    confirmDisabled={deleteConfirmed}
                    id={deleteIndex}
                    content="Are you sure you want to delete this document?"
                    header="Delete"
                />
            ) : null}
        </div>
    )
}

export default RequestCard

'use client'
import React, { useEffect, useState } from 'react'
import SearchBar from '../search-bar/SearchBar'
import DocumentCard from '../document-card/DocumentCard'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import HeaderNav from '../header-nav/HeaderNav'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setCompletedDocumentRequest } from '@/lib/feature/completed-document.slice'

export interface DocumentProps {
    name: string
    dateReceived: Date
    link: string
    status: string
}

const MyDocuments: React.FC = () => {
    const [selectedDocument, setSelectedDocument] =
        useState<DocumentProps | null>(null)
    const userData = useAppSelector((state) => state.user.user)
    const dispatch = useAppDispatch()
    const completedDocumentRequest = useAppSelector(
        (state) => state.completeDocument.completedDocumentRequest,
    )

    useEffect(() => {
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
            dispatch(setCompletedDocumentRequest(requests)) // Only completed requests will be stored
        }
        fetchDocumentRequested()
    }, [dispatch])

    const handleDocumentClick = (document: DocumentProps) => {
        setSelectedDocument(document)
    }

    return (
        <div className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="My Docs"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section
                    className={`bg-white pt-8 min-h-screen pb-24 px-4 rounded-t-3xl ${completedDocumentRequest.length <= 0 && 'flex justify-center w-full items-center h-full'}`}
                >
                    {selectedDocument ? (
                        <div className="w-full border rounded-t-[30px] box-shadow overflow-hidden flex flex-col items-center">
                            <div className="p-4">
                                <button
                                    className="mb-4 flex"
                                    // onClick={() => setSelectedDocument(null)}
                                >
                                    <ChevronLeftIcon className="w-6 h-6" />
                                    <h2 className="text-lg font-bold">
                                        Preview
                                    </h2>
                                </button>
                            </div>

                            {/* <iframe
                                src={selectedDocument.link}
                                title={selectedDocument.name}
                                className="w-full h-full"
                            ></iframe> */}
                        </div>
                    ) : (
                        <div>
                            {completedDocumentRequest.length > 0 ? (
                                <>
                                    <SearchBar />
                                    <div className="flex flex-col gap-4 mt-5 mb-[150px]">
                                        {completedDocumentRequest.map(
                                            (document, index) => (
                                                <DocumentCard
                                                    key={index}
                                                    document={document}
                                                    // onPreview={() =>
                                                    //     handleDocumentClick(
                                                    //         document,
                                                    //     )
                                                    // }
                                                />
                                            ),
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div>
                                    <h4 className="font-bold text-[1.1rem] sm:text-xl mb-2 text-2xl text-center">
                                        No completed documents available!
                                    </h4>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}

export default MyDocuments

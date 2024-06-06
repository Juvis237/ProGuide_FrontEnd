'use client'
import React, { useState } from 'react'
import Header from '../header/Header'
import SearchBar from '../search-bar/SearchBar'
import DocumentCard from '../document-card/DocumentCard'
import { myDocumentData } from '../../../data'
import { ChevronLeftIcon } from '@radix-ui/react-icons'

export interface DocumentProps {
    name: string
    dateReceived: Date
    link: string
}

const MyDocuments: React.FC = () => {
    const [selectedDocument, setSelectedDocument] = useState<DocumentProps | null>(null)

    const handleDocumentClick = (document: DocumentProps) => {
        setSelectedDocument(document)
    }

    return (
        <div className="px-4 flex flex-col items-center">
            <Header
                title="My Documents"
                classes="font-bold mt-4 text-xl text-muted"
            />
            <div
                className="relative min-w-[400px] w-90% top-[94px] left-[1px] gap-[0px] rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[0px] rounded-br-[0px] bg-white p-4"
            >
                {selectedDocument ? (
                    <div className="w-full bg-[#C7DBF9] h-[630px] mb-[150px] h-full border rounded-t-[30px] shadow-md overflow-hidden flex flex-col items-center">
                        <div className="p-4">
                            <button
                                className="mb-4 flex"
                                onClick={() => setSelectedDocument(null)}
                            >
                                <ChevronLeftIcon className='w-6 h-6'/>
                                <h2 className="text-lg font-bold">Preview</h2>
                            </button>
                        </div>
                        {/*<FilePreview file={selectedDocument.link}/>*/}
                        <iframe
                            src={selectedDocument.link}
                            title={selectedDocument.name}
                            className="w-full h-full"
                        ></iframe>
                    </div>
                ) : (
                    <div
                        className='w-full min-w-[366px]'
                    >
                        {myDocumentData.length > 0 ? (
                            <>
                                <SearchBar />
                                <div className="flex flex-col gap-4 mt-5 mb-[150px]">
                                    {myDocumentData.map((document) => (
                                        <DocumentCard
                                            key={document.id}
                                            document={document}
                                            onPreview={() => handleDocumentClick(document)}
                                        />
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div
                                className={`w-full rounded-2xl box-shadow flex justify-between items-center sm:flex-col p-4 mt-3`}
                            >
                                <div className="flex justify-between w-full">
                                    <div>
                                        <h4 className="font-bold text-[1.1rem] sm:text-xl mb-2">
                                            No documents available!
                                        </h4>
                                        <span className="text-secondary-foreground text-sm gap-y-3">
                                            Book a document to get started
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full request-bg"></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyDocuments

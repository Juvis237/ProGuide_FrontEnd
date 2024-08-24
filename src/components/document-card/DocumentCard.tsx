import React from 'react'
import {
    ChevronRightIcon,
    DownloadIcon,
    TrashIcon,
} from '@radix-ui/react-icons'
import { FileTextIcon } from '@radix-ui/react-icons'
import { z } from 'zod'

import { completedDocumentSchema } from '@/types/completed-document.type'

// Infer the DocumentRequestType from the schema
type DocumentRequestType = z.infer<typeof completedDocumentSchema>

interface Props {
    document: DocumentRequestType
    // onPreview: () => void
}

const DocumentCard: React.FC<Props> = ({ document }) => {
    return (
        <div
            className="flex flex-col gap-4 p-4 rounded-lg box-shadow"
            // onClick={onPreview}
        >
            <div className="flex items-center gap-4">
                <div>
                    <FileTextIcon color="red" className="w-10 h-10" />
                </div>
                <div className="text-left">
                    {/* Adjusted to access the correct nested properties */}
                    <h3 className="font-bold pl-2">
                        {document.delivrable?.name}
                    </h3>
                    <p className="text-sm pl-2">
                        Date received:{' '}
                        <span className="text-secondary">
                            {new Date(document.date).toDateString()}
                        </span>
                    </p>
                    <h3 className="">
                        <TrashIcon color="red" className="w-8 h-5" />
                    </h3>
                </div>
                <a className="ml-auto cursor-pointer">
                    <ChevronRightIcon />
                </a>
            </div>
            <div className="flex justify-end">
                <a
                    download
                    // href={document.delivrable?.link}
                    className="flex gap-2 hover:bg-[#1C1C1C] text-white py-2 px-4 rounded bg-[#2F2F2F]"
                >
                    <p>Download</p>
                    <span className="text-2xl">
                        <DownloadIcon className="h-5 w-5" />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default DocumentCard

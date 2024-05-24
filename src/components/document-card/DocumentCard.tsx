import React from 'react'
import { ChevronRightIcon, DownloadIcon, FileIcon, TrashIcon } from '@radix-ui/react-icons'
import { FileTextIcon } from '@radix-ui/react-icons'
import { DocumentProps } from '../dashboard-mydocuments/MyDocuments'

interface Props {
    document: DocumentProps
    onPreview: () => void
}

const DocumentCard: React.FC<Props> = ({ document, onPreview }) => {

    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
                <div>
                    <FileTextIcon color='red' className='w-10 h-10' />
                </div>
                <div>
                    <h3 className="font-bold">{document.name}</h3>
                    <p className="text-sm">Date received: <span className='text-[#ffac1c]'>{new Date(document.dateReceived).toDateString()}</span></p>
                    <TrashIcon color='red' className='w-8 h-5' />
                </div>
                <a className="ml-auto cursor-pointer" onClick={onPreview}>
                    <ChevronRightIcon />
                </a>
            </div>
            <div className="flex justify-end">
                <a download href={document.link} className="flex gap-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded bg-[#1C1C1C]">
                    <p>Download</p>
                    <span className='text-2xl'>
                        <DownloadIcon className="h-5 w-5"/>
                    </span>
                </a>
            </div>
        </div>
    )
}

export default DocumentCard

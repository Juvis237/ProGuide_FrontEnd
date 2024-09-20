import { ArrowUpTrayIcon, DocumentIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Paragraph from '../paragraph/Paragraph'

const UploadDocument = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mt-6 relative">
                <DocumentIcon className="w-[9rem]" />
                <div className="absolute w-10 h-10 flex justify-center items-center bg-white rounded-full bottom-0 right-0">
                    <ArrowUpTrayIcon className="h-6 w-6 text-primary font-bold" />
                </div>
            </div>
            <h3 className="text-white text-[0.85rem] font-bold mt-4">
                Upload document{' '}
            </h3>
            <Paragraph
                content="Complete the process by uploading collected document(s) [accepted file format- PDF ]. Scan directly or upload from files"
                classes="text-white text-sm text-center"
            />
        </div>
    )
}

export default UploadDocument

"use client"
import React, { useState } from 'react';
import { FilePlusIcon, PlusIcon, TrashIcon, OpenInNewWindowIcon, CameraIcon } from '@radix-ui/react-icons';
import HeaderExtend from '../header/HeaderExtend';

const UploadDocuments: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [uploadProgress, setUploadProgress] = useState<number[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            setFiles([...files, ...newFiles]);
            setUploadProgress([...uploadProgress, ...newFiles.map(() => 0)]);
            setShowModal(true); // Show modal when files are selected
            setIsUploading(true); // Set uploading to true when files are uploading

            newFiles.forEach((file, index) => {
                // Simulate file upload
                const interval = setInterval(() => {
                    setUploadProgress((prev) => {
                        const newProgress = [...prev];
                        const progressIndex = prev.length - newFiles.length + index;
                        if (newProgress[progressIndex] < 100) {
                            newProgress[progressIndex] += 10;
                        } else {
                            clearInterval(interval);
                            setIsUploading(false); // Set uploading to false when files are uploaded
                        }
                        return newProgress;
                    });
                }, 200);
            });

        }
    };

    const handleFileRemove = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
        const newProgress = [...uploadProgress];
        newProgress.splice(index, 1);
        setUploadProgress(newProgress);
    };

    const handleUpload = () => {
        // Logic to save the uploaded files
        setShowModal(false);
        setFiles([]);
        setUploadProgress([]);
        alert("Files have been successfully uploaded!");
    };

    const handlePlusIconClick = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <div className="flex flex-col items-center min-h-screen">
            <HeaderExtend title="Upload">
                <div className="w-full flex flex-col items-center mt-10 mb-6">
                    <div className="p-4 mb-4">
                        <FilePlusIcon className="text-white w-10 h-10" />
                    </div>
                    <h2 className="text-lg font-bold mb-2">Upload document</h2>
                    <p className="text-center text-sm mb-6">
                        Complete the process by uploading collected document(s) (accepted file format - PDF).
                        Scan directly or upload from files.
                    </p>
                </div>
            </HeaderExtend>
            <div className='relative flex flex-col items-center mt-6'>
                <button className="flex items-center gap-2 bg-[#FFAC1C] text-white px-6 py-2 rounded mb-4 absolute top-[-40%]">
                    <CameraIcon />
                    Scan Here
                </button>
                <div className="bg-white p-4 flex flex-col items-center">
                    <span className="text-sm text-black font-bold mb-4">OR</span>
                    <label className="flex items-center gap-2 text-[#3A6BE1] cursor-pointer shadow-md p-2">
                        <OpenInNewWindowIcon />
                        Select document from Files
                        <input id='fileInput' type="file" multiple className="hidden" onChange={handleFileUpload} />
                    </label>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                        <h3 className="text-lg font-bold mb-4">Uploading Documents</h3>
                        {files.map((file, index) => (
                            <div key={index} className="flex items-center justify-between mb-2">
                                <span>{file.name}</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${uploadProgress[index]}%` }}></div>
                                </div>
                                <button onClick={() => handleFileRemove(index)} className="text-red-500">
                                    <TrashIcon className="w-6 h-6" />
                                </button>
                            </div>
                        ))}
                        <div className="flex items-center justify-between mt-4">
                            <button onClick={handlePlusIconClick} className="bg-gray-300 rounded-[50%]  text-black p-2">
                                <PlusIcon className='w-[24px] h-[24px]' />
                            </button>
                            <div className="flex justify-end mt-4">
                                <button onClick={() => setShowModal(false)} className="border border-[#FFAC1C] text-[#FFAC1C] p-2 rounded mr-2">
                                    Cancel
                                </button>
                                <button onClick={handleUpload} className={`${isUploading ? "bg-[#FFF3DD] text-[#FFAC1C] p-2 rounded" : "bg-[#FFAC1C] text-white p-2 rounded"}`}>
                                    {isUploading ? 'Uploading...' : 'Upload'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadDocuments;

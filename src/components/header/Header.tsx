import React from 'react'
import { BellIcon, ArrowLeftIcon } from '@radix-ui/react-icons'

interface Props {
    title: string;
    classes: string
}

const Header: React.FC<Props> = ({ title, classes }) => {
    return (
        <div className={`font-bold mt-4 text-xl text-muted w-full flex justify-between px-4 py-2`}>
            <div className="flex items-center space-x-4">
                <ArrowLeftIcon className="w-6 h-6" />
                <h1 className="text-lg font-semibold">{title}</h1>
            </div>
            <div className="flex items-center space-x-4">
                <BellIcon className="w-6 h-6" />
                <img className="w-8 h-8 rounded-full border-2" />
            </div>
        </div>
    )
}

export default Header

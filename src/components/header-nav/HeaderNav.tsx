import { ArrowLeftIcon, BellAlertIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Header from '../header/Header'
import Image from 'next/image'

interface Props {
    link: string
    title: string
    imageSrc: string
}

const HeaderNav: React.FC<Props> = ({ link, title, imageSrc }) => {
    return (
        <div className="flex gap-4 items-center justify-between w-full -mt-16 mb-4 px-4">
            <div className="flex items-center gap-9">
                <Link className="w-6 cursor-pointer text-white" href={link}>
                    <ArrowLeftIcon />
                </Link>
                <Header title={title} classes="text-white font-bold text-2xl" />
            </div>
            <div className="flex items-center gap-3">
                <BellAlertIcon className="w-6 h-6 text-white cursor-pointer" />
                <div className="w-8 h-8 rounded-full border-2 border-secondary">
                    <Image width={100} height={100} alt="" src={imageSrc} />
                </div>
            </div>
        </div>
    )
}

export default HeaderNav

'use client'
import {
    ArrowLeftIcon,
    BellAlertIcon,
    PencilIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import Header from '../header/Header'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface Props {
    link: string
    title: string
    imageSrc: string
    marginTop?: string
    space?: string
}

const HeaderNav: React.FC<Props> = ({
    link,
    title,
    imageSrc,
    marginTop,
    space,
}) => {
    const url = usePathname()
    return (
        <div
            className={`flex gap-4 items-center justify-between w-full ${marginTop ? marginTop : '-mt-10'} mb-4 ${space ? space : 'px-4'}`}
        >
            <div className="flex items-center gap-6">
                <Link
                    className={`w-6 cursor-pointer ${url === '/dashboard' ? 'text-black' : 'text-white'}`}
                    href={link}
                >
                    <ArrowLeftIcon />
                </Link>
                <Header
                    title={title}
                    classes="text-white font-medium text-xl"
                />
            </div>
            {url === '/profile-edit' ? (
                <PencilIcon className="text-white w-6 h-6" />
            ) : (
                <div className="flex items-center gap-3">
                    <Link href={'/notifications'}>
                        <BellAlertIcon
                            className={`${url === '/notifications' || url === '/dashboard' ? 'text-secondary' : 'text-white'} w-6 h-6 cursor-pointer`}
                        />
                    </Link>
                    <div className="w-8 h-8 rounded-full border-2 border-secondary">
                        <Link href={'/profile'}>
                            <Image
                                width={100}
                                height={100}
                                alt=""
                                src={imageSrc}
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeaderNav

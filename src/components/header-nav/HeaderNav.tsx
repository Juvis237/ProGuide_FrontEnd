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
import { usePathname, useRouter } from 'next/navigation'
import { useAppSelector } from '@/lib/hook'

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
    const router = useRouter()
    const url = usePathname()
    const notificationData = useAppSelector(
        (state) => state.userNotification.userNotification,
    )

    const notificationCount = notificationData?.notifications?.filter(
        (el) => el.read_at === null,
    ).length

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
                    <div className="relative">
                        <Link href={'/notifications'}>
                            <BellAlertIcon
                                className={`${url === '/notifications' || url === '/dashboard' ? 'text-secondary' : 'text-white'} w-7 h-7 cursor-pointer`}
                            />
                        </Link>
                        <div
                            className="absolute bg-secondary -top-2 -right-2 w-5 h-5 flex justify-center items-center rounded-full text-white text-sm"
                            onClick={() => router.push('/notifications')}
                        >
                            {notificationCount && notificationCount > 9 ? (
                                <span>
                                    {9}
                                    <sup>+</sup>
                                </span>
                            ) : (
                                notificationCount
                            )}
                        </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border-2 border-secondary">
                        <Link href={'/profile'}>
                            <Image
                                width={100}
                                height={100}
                                alt=""
                                objectFit="contain"
                                src={imageSrc}
                                className="rounded-full w-full h-full"
                            />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeaderNav

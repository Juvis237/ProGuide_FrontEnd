import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

interface Props {
    label: string
    Icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined
            titleId?: string | undefined
        } & React.RefAttributes<SVGSVGElement>
    >
    link: string
}

const ProfileTab: React.FC<Props> = ({ label, Icon, link }) => {
    return (
        <Link
            href={link}
            className={`cursor-pointer flex justify-between items-center border-b py-3 ${label === 'Logout' && 'text-red-600'}`}
        >
            <div className={`flex gap-5 `}>
                <Icon
                    className={`w-5 h-5 ${label === 'Logout' && '-rotate-90'}`}
                />
                <p>{label}</p>
            </div>
            <ArrowRightIcon className="w-5 h-5 font-bold" />
        </Link>
    )
}

export default ProfileTab

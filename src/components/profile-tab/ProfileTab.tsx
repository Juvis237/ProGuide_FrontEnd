import { ArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'

interface Props {
    label: string
    Icon: React.ForwardRefExoticComponent<
        Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
            title?: string | undefined
            titleId?: string | undefined
        } & React.RefAttributes<SVGSVGElement>
    >
}

const ProfileTab: React.FC<Props> = ({ label, Icon }) => {
    return (
        <div
            className={`cursor-pointer flex justify-between items-center border-b py-3 ${label === 'Logout' && 'text-red-600'}`}
        >
            <div className="flex gap-5">
                <Icon
                    className={`w-5 h-5 ${label === 'Logout' && '-rotate-90'}`}
                />
                <p>{label}</p>
            </div>
            <ArrowRightIcon className="w-5 h-5 font-bold" />
        </div>
    )
}

export default ProfileTab

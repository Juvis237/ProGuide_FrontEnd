import React, { useState } from 'react'
import { setUser } from '@/lib/feature/user.slice'
import { useAppDispatch } from '@/lib/hook'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import { useRouter } from 'next/navigation'
import Modal from '../modal/Modal'

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
    const [deleteConfirmed, setDeleteConfirmed] = useState<boolean>(false)
    const [logout, setLogout] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const router = useRouter()

    const hideDelModal = () => {
        setLogout(false)
    }

    const showLogoutModal = () => {
        setLogout(true)
    }

    const handleLogout = async () => {
        try {
            setDeleteConfirmed(true)
            setLogout(true)
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/logout`,
            )

            const res = await req.json()

            if (!res.status) {
                localStorage.removeItem('user')
                localStorage.removeItem('user-token')
                dispatch(setUser(null))
                toast({
                    title: 'Logout Successful',
                    description: (
                        <ToastDescription description={`User Logout`} />
                    ),
                })
                setDeleteConfirmed(false)
                setLogout(false)
                router.push('/login')
            }
        } catch (error) {
            toast({
                title: 'Logout Error',
                variant: 'destructive',
                description: <ToastDescription description={`${error}`} />,
            })
            setDeleteConfirmed(false)
            setLogout(false)
        }
    }
    return (
        <>
            <Link
                href={link}
                className={`cursor-pointer flex justify-between items-center border-b py-3 ${label === 'Logout' && 'text-red-600'}`}
                onClick={(e) => {
                    if (label === 'Logout') {
                        e.preventDefault() // Prevent navigation
                        showLogoutModal() // Show the modal
                    }
                }}
            >
                <div className={`flex gap-5 `}>
                    <Icon
                        className={`w-5 h-5 ${label === 'Logout' && '-rotate-90'}`}
                    />
                    <p>{label}</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 font-bold" />
            </Link>
            {logout ? (
                <Modal
                    hideModal={hideDelModal}
                    confirmAction={() => handleLogout()}
                    confirmDisabled={deleteConfirmed}
                    content="Are you sure you want to logout?"
                    header="Logout"
                />
            ) : null}
        </>
    )
}

export default ProfileTab

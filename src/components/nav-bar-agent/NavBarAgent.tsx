'use client'
import React, { useEffect } from 'react'
import { dashboardLinkAgent } from '../../../data'
import NavBarLink from '../nav-bar-link/NavBarLink'
import { useAppDispatch } from '@/lib/hook'
import { setUser } from '@/lib/feature/user.slice'
import { setUserNotification } from '@/lib/feature/notification.slice'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'

const NavBarAgent = () => {
    const dispatch = useAppDispatch()
    const fetchNotifications = async () => {
        try {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/notifications`,
                {
                    headers: {
                        'Content-type': 'application/json',
                        Accept: 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('user-token')}`,
                    },
                },
            )

            const res = await req.json()
            if (res) {
                dispatch(setUserNotification(res))
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error fetching notification',
                description: <ToastDescription description={`${error}`} />,
            })
        }
    }
    //! render user store in localStorage
    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                const user = JSON.parse(storedUser)
                dispatch(setUser(user))
            }
        }
        fetchNotifications()
    }, [])

    return (
        <nav className="fixed w-full bottom-0 z-10 mb-6">
            <section className="mx-4 bg-white box-shadow flex justify-between items-center py-3 px-4 rounded-2xl">
                {dashboardLinkAgent.map((item, index) => (
                    <NavBarLink
                        key={index}
                        link={item.link}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </section>
        </nav>
    )
}

export default NavBarAgent

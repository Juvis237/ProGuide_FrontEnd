'use client'
import React, { useEffect } from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import Header from '../header/Header'
import { Button } from '../ui/button'
import NotificationCard from '../notification-card/NotificationCard'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setUserNotification } from '@/lib/feature/notification.slice'
import ToastDescription from '../toast-description/ToastDescription'
import { toast } from '../ui/use-toast'

const NotificationContainer = () => {
    const dispatch = useAppDispatch()
    const userData = useAppSelector((state) => state.user.user)
    const notificationData = useAppSelector(
        (state) => state.userNotification.userNotification,
    )
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

    useEffect(() => {
        fetchNotifications()
    }, [])

    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Notifications"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-[85vh] pb-32 px-4 rounded-t-3xl">
                    <div className="flex justify-between items-center pb-2 border-b-2">
                        <Header
                            title="All Notifications"
                            classes="text-left text-xl font-bold text-primary"
                        />
                        <Button
                            variant={'ghost'}
                            className="text-secondary hover:bg-white hover:text-secondary"
                        >
                            mark all as read
                        </Button>
                    </div>
                    <div className="pt-4">
                        {notificationData &&
                            notificationData?.notifications?.map(
                                (el, index) => (
                                    <NotificationCard
                                        key={index}
                                        title={el.data.title}
                                        description={el.data.content}
                                        time={el.created_at}
                                    />
                                ),
                            )}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default NotificationContainer

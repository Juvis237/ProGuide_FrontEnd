import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import Header from '../header/Header'
import { Button } from '../ui/button'
import { notificationData } from '../../../data'
import NotificationCard from '../notification-card/NotificationCard'

const NotificationContainer = () => {
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Notifications"
                link="/dashboard"
                imageSrc="/assets/avatar.png"
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
                            Clear all
                        </Button>
                    </div>
                    <div className="pt-4">
                        {notificationData.map((el, index) => (
                            <NotificationCard
                                key={index}
                                title={el.title}
                                description={el.description}
                                time={el.time}
                                Icon={el.icon}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default NotificationContainer

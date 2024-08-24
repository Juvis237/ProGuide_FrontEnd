'use client'
import React, { useState } from 'react'
import RenderSummaryCompleted from '../render-summary-completed/RenderSummaryCompleted'
import PaymentCompleteUI from '../payment-complete-ui/PaymentCompleteUI'
import HeaderNav from '../header-nav/HeaderNav'
import { useAppSelector } from '@/lib/hook'

const SummaryContainer = () => {
    const [viewRequestDetail, setViewRequestDetail] = useState(false)
    const userData = useAppSelector((state) => state.user.user)
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Request"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl">
                    {viewRequestDetail && <RenderSummaryCompleted />}
                    {!viewRequestDetail && (
                        <PaymentCompleteUI
                            setViewRequestDetail={setViewRequestDetail}
                        />
                    )}
                </section>
            </div>
        </section>
    )
}

export default SummaryContainer

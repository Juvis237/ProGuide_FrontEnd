import PageLayout from '@/app/PageLayout'
import AgentBalanceCard from '@/components/agent-balance-card/AgentBalanceCard'
import AgentStats from '@/components/agent-stats/AgentStats'
import HeaderNav from '@/components/header-nav/HeaderNav'
import Header from '@/components/header/Header'
import React from 'react'
import { requestData } from '../../../data'
import AgentRequestCard from '@/components/agent-request-card/AgentRequestCard'

const page = () => {
    return (
        <PageLayout>
            <section className="w-full h-1/2 pb-8 bg-primary px-4">
                <HeaderNav
                    title="Dashboard"
                    link="/dashboard"
                    imageSrc={'/assets/avatar.svg'}
                    marginTop="pt-8"
                    space="px-0"
                />
                <AgentStats />

                <AgentBalanceCard />
            </section>
            <div className="px-4 pb-32">
                <Header
                    title="Available Requests"
                    classes="font-bold my-4 text-xl"
                />

                {requestData.map((el, index) => (
                    <AgentRequestCard key={index} request={el} />
                ))}
            </div>
        </PageLayout>
    )
}

export default page

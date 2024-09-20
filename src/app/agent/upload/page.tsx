import PageLayout from '@/app/PageLayout'
import AgentBalanceCard from '@/components/agent-balance-card/AgentBalanceCard'
import AgentSelectFile from '@/components/agent-select-file/AgentSelectFile'
import AgentStats from '@/components/agent-stats/AgentStats'
import AgentUploadContainer from '@/components/agent-upload-container/AgentUploadContainer'
import HeaderNav from '@/components/header-nav/HeaderNav'
import Header from '@/components/header/Header'
import React from 'react'

const page = () => {
    return (
        <PageLayout>
            <section className="w-full h-[55vh] pb-8 bg-primary px-4">
                <HeaderNav
                    title="Upload"
                    link="/agent"
                    imageSrc={'/assets/avatar.svg'}
                    marginTop="pt-8"
                    space="px-0"
                />
                <AgentUploadContainer />
            </section>
            <div>
                <AgentSelectFile />
            </div>
        </PageLayout>
    )
}

export default page

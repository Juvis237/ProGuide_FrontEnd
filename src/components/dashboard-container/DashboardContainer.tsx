import React from 'react'
import DashboardSummaryCard from '../dashboard-summary-card/DashboardSummaryCard'
import Header from '../header/Header'
import SearchBar from '../search-bar/SearchBar'
import RequestStatusBar from '../request-status-bar/RequestStatusBar'
import RequestCard from '../request-card/RequestCard'
import Support from '../support/Support'
import { dashboardSummaryData } from '../../../data'
import HeaderNav from '../header-nav/HeaderNav'

const DashboardContainer = () => {
    return (
        <div
            className={`px-4 ${dashboardSummaryData.length < 0 && 'pt-32'} pt-[4.5rem]`}
        >
            <HeaderNav
                link="/dashboard"
                title=""
                imageSrc="/assets/avatar.png"
                space="space"
            />
            <div
                className={`${dashboardSummaryData.length > 0 ? '' : 'img-bg-2 pt-8'}`}
            ></div>
            <DashboardSummaryCard />
            <Header
                title="My Requests"
                classes="font-bold mt-4 text-xl text-muted"
            />
            {dashboardSummaryData.length > 0 ? (
                <>
                    <SearchBar />
                    <RequestStatusBar />
                    <RequestCard />
                </>
            ) : (
                <div
                    className={`w-full rounded-2xl box-shadow flex justify-between items-center sm:flex-col p-4 mt-3`}
                >
                    <div className="flex justify-between w-full">
                        <div>
                            <h4 className="font-bold text-[1.1rem] sm:text-xl mb-2">
                                You haven’t made any request yet!
                            </h4>
                            <span className="text-secondary-foreground text-sm gap-y-3">
                                Get started and have your documents without a
                                glimpse of stress
                            </span>
                        </div>
                    </div>
                    <div className="w-full request-bg"></div>
                </div>
            )}
            <Support />
        </div>
    )
}

export default DashboardContainer

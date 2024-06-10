import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import SearchBar from '../search-bar/SearchBar'
import RequestStatusBar from '../request-status-bar/RequestStatusBar'
import Support from '../support/Support'
import Timeline from '../time-line/Timeline'
import ProfileContainerAgent from '../profile-container-agent/ProfileContainerAgent'

const TrackingContainer = () => {
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Tracking"
                link="/dashboard"
                imageSrc="/assets/avatar.png"
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl">
                    <SearchBar />
                    <RequestStatusBar />
                    <ProfileContainerAgent />
                </section>
            </div>
            <Support />
        </section>
    )
}

export default TrackingContainer

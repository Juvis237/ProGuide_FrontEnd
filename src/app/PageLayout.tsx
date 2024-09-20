import NavBarAgent from '@/components/nav-bar-agent/NavBarAgent'
import React from 'react'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBarAgent />
            <main>{children}</main>
        </>
    )
}

export default PageLayout

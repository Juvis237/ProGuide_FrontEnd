import NavBar from '@/components/nav-bar-dashboard/NavBar'
import React from 'react'

const AgentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar agent={true} />
            <main>{children}</main>
        </>
    )
}

export default AgentLayout

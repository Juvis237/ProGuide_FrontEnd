import NavBar from '@/components/nav-bar-dashboard/NavBar'
import ProtectRoute from '@/components/protect-route/ProtectRoute'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProtectRoute>
            <NavBar />
            <main>{children}</main>
        </ProtectRoute>
    )
}

export default AppLayout

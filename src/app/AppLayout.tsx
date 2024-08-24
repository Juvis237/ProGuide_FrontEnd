import NavBar from '@/components/nav-bar-dashboard/NavBar'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
        </>
    )
}

export default AppLayout

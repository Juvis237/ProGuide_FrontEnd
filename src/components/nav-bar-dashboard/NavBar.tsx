'use client'
import React from 'react'
import { dashboardLink } from '../../../data'
import NavBarLink from '../nav-bar-link/NavBarLink'

const NavBar = () => {
    return (
        <nav className="fixed w-full bottom-0 z-10 mb-6">
            <section className="mx-4 bg-white box-shadow flex justify-between items-center py-3 px-4 rounded-2xl">
                {dashboardLink.map((item, index) => (
                    <NavBarLink
                        key={index}
                        link={item.link}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </section>
        </nav>
    )
}

export default NavBar

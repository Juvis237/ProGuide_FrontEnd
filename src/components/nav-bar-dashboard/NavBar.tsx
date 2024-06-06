'use client'
import React from 'react'
import { dashboardLink, agentLink } from '../../../data'
import NavBarLink from '../nav-bar-link/NavBarLink'

interface NavBarProps {
    agent?: boolean;
}

interface Link {
    icon: any; 
    link: string;
    name: string;
}

const NavBar: React.FC<NavBarProps> = ({ agent }) => {

    const links: Link[] = agent === true ? agentLink : dashboardLink;

    return (
        <nav className="fixed w-full bottom-0 z-10 mb-6">
            <section className="mx-4 bg-white box-shadow flex justify-between items-center py-3 px-4 rounded-2xl">
                {links.map((item, index) => (
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

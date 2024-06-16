import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className="p-4 md:p-8">
            <nav className="flex justify-between items-center py-5 bg-primary px-4 rounded-2xl">
                <h1 className="text-white text-2xl">Pro-Delivery</h1>
                <Button
                    className="py-6 px-4 bg-secondary text-white hover:bg-none"
                    asChild
                >
                    <Link href={'/get-started'}>
                        Get Started <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </nav>
        </div>
    )
}

export default Nav

'use client'
import { useAppSelector } from '@/lib/hook'
import { ReactNode, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DNA } from 'react-loader-spinner'

type Props = {
    children: ReactNode
}

const ProtectRoute = ({ children }: Props) => {
    const user = useAppSelector((state) => state.user.user)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useLayoutEffect(() => {
        const storedUser = localStorage.getItem('user') // Check localStorage
        if (!storedUser) {
            router.replace('/login') // Redirect to home if no user data found
        } else {
            setIsLoading(false) // Stop loading when user is found
        }
    }, [user, router])

    if (isLoading) {
        return (
            <div className="min-h-screen border-2 w-full flex justify-center items-center">
                <div className="">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper"
                    />
                </div>
            </div>
        ) // Show loading spinner while checking user
    }

    return <>{children}</> // Render the protected content once user is loaded
}

export default ProtectRoute

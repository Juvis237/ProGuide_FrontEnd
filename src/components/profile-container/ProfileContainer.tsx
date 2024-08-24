'use client'

import React, { useLayoutEffect, useState } from 'react'
import { profileData } from '../../../data'
import ProfileTab from '../profile-tab/ProfileTab'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/24/outline'
import HeaderNav from '../header-nav/HeaderNav'
import { useAppDispatch, useAppSelector } from '@/lib/hook'
import { setUser } from '@/lib/feature/user.slice'
import { toast } from '../ui/use-toast'
import ToastDescription from '../toast-description/ToastDescription'
import { useRouter } from 'next/navigation'

const ProfileContainer = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const token =
        typeof localStorage !== 'undefined' &&
        localStorage.getItem('user-token')
    const [selectedImage, setSelectedImage] = useState(null)
    const userData = useAppSelector((state) => state.user.user)
    useLayoutEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                const user = JSON.parse(storedUser)
                dispatch(setUser(user))
            }
        }
    }, [dispatch])

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0]
        setSelectedImage(file)

        const formData = new FormData()
        formData.append('image', file)

        try {
            const req = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/profile_update`,
                {
                    method: 'POST',
                    body: formData,
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                },
            )
            const res = await req.json()
            const { message, user, success } = res

            if (success) {
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('user', JSON.stringify(user))
                }
                dispatch(setUser(user))
                toast({
                    variant: 'default',
                    title: 'Profile Updated Successfully',
                    description: (
                        <ToastDescription description={`${message}`} />
                    ),
                })
                router.push('/dashboard')
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error uploading image',
                description: <ToastDescription description={`${error}`} />,
            })
        }
    }

    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <HeaderNav
                title="Account"
                link="/dashboard"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
            />
            <div className="flex justify-center items-center gap-1 my-3 flex-col text-white">
                <div className="w-24 h-24 border-2 border-white rounded-full relative">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        objectFit="contain"
                        src={
                            userData ? userData?.profile : '/assets/avatar.svg'
                        }
                        className="rounded-full w-full h-full"
                    />
                    <div>
                        <label
                            htmlFor="imageUploadInput"
                            className="absolute top-0 -right-3 rounded-full h-9 w-9 flex justify-center items-center bg-white cursor-pointer"
                        >
                            <CameraIcon className="w-6 h-6 text-black" />
                        </label>
                        <input
                            id="imageUploadInput"
                            name="photo"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>
                <p>
                    {userData && `${userData.first_name} ${userData.last_name}`}
                </p>
                <small className="text-[0.7rem]">
                    {userData && userData.email}
                </small>
                <small className="text-[0.65rem]">
                    {userData && userData.phone}
                </small>
            </div>
            <div className="flex flex-col mx-4 bg-white min-h-[350px] rounded-2xl px-6 py-6 box-shadow-2 w-[90%] mb-9">
                {profileData.map((el, index) => (
                    <ProfileTab
                        key={index}
                        label={el.label}
                        Icon={el.icon}
                        link={el.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProfileContainer

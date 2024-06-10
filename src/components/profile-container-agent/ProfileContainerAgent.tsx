'use client'

import React from 'react'
import { profileData, profileDataAgent } from '../../../data'
import ProfileTab from '../profile-tab/ProfileTab'
import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/24/outline'
import HeaderNav from '../header-nav/HeaderNav'

const ProfileContainerAgent = () => {
    return (
        <div className="img-bg flex flex-col items-center justify-center">
            <HeaderNav
                title="Account"
                link="/dashboard"
                imageSrc="/assets/avatar.png"
            />
            <div className="flex justify-center items-center gap-1 my-3 flex-col text-white">
                <div className="w-24 h-24 border-2 border-white rounded-full relative">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={'/assets/avatar.png'}
                    />
                    <div className="absolute top-0 right-0 rounded-full h-7 w-7 flex justify-center items-center bg-white cursor-pointer">
                        <CameraIcon className={`"w-5 h-5 text-black`} />
                    </div>
                </div>
                <p>Kathy Mankaa</p>
                <small className="text-[0.7rem]">katherinem@gmail.com</small>
                <small className="text-[0.65rem]">672835564</small>
            </div>
            <div className="flex flex-col mx-4 bg-white min-h-[400px] rounded-2xl px-6 py-6 box-shadow-2 w-[90%] mb-9">
                {profileDataAgent.map((el, index) => (
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

export default ProfileContainerAgent

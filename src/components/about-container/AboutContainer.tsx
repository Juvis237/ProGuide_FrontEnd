'use client'
import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import { about, coreValues, howItWorks } from '../../../data'
import Paragraph from '../paragraph/Paragraph'
import { useAppSelector } from '@/lib/hook'

const AboutContainer = () => {
    const userData = useAppSelector((state) => state.user.user)
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="About Pro-Guide"
                link="/profile"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-1/2 pb-32 px-4 rounded-t-3xl">
                    <h3 className="py-3 text-secondary text-lg font-bold uppercase">
                        About Pro-delivery
                    </h3>
                    {about.map((el, index) => (
                        <div key={index}>
                            <h4 className="text-muted font-bold">{el.title}</h4>
                            <Paragraph
                                content={el.description}
                                classes="text-[0.85rem]"
                            />
                        </div>
                    ))}
                    <h4 className="text-muted font-bold mb-2">Core Values</h4>
                    {coreValues.map((el, index) => (
                        <div key={index}>
                            <Paragraph
                                content={el.heading}
                                classes="text-[0.85rem] font-bold inline"
                            />
                            <Paragraph
                                content={el.content}
                                classes="text-[0.85rem] inline"
                            />
                        </div>
                    ))}
                    <h4 className="text-muted font-bold pt-4">
                        How the Pro - Delivery works
                    </h4>
                    {howItWorks.map((el, index) => (
                        <div key={index}>
                            <Paragraph
                                content={el.heading}
                                classes="text-[0.85rem] font-bold"
                            />
                            <Paragraph
                                content={el.content}
                                classes="text-[0.85rem] pb-0 pt-0"
                            />
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default AboutContainer

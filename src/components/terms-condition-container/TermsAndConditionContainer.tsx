'use client'
import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import Paragraph from '../paragraph/Paragraph'
import { useAppSelector } from '@/lib/hook'
import { declaimerContent, termsAndCondition } from '../../../data'
const TermsAndConditionContainer = () => {
    const userData = useAppSelector((state) => state.user.user)
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Terms And Conditions"
                link="/profile"
                imageSrc={userData ? userData?.profile : '/assets/avatar.svg'}
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-1/2 pb-32 px-4 rounded-t-3xl">
                    <h3 className="text-left font-bold">
                        ProGuide Terms and Conditions
                    </h3>
                    <Paragraph
                        content="ProGuide is dedicated to simplifying access to academic tools and services for students, providing digital personal assistants that offer support, clarity, and motivation throughout their educational journey. By leveraging technology, ProGuide aims to make the process of obtaining academic documents more efficient and stress-free."
                        classes="text-[0.85rem]"
                    />
                    <h4 className="text-muted font-bold pt-4">
                        Terms and Conditions:
                    </h4>
                    {termsAndCondition.map((el, index) => (
                        <div key={index}>
                            <Paragraph
                                content={`${index + 1}. ${el.heading}`}
                                classes="text-[0.85rem] font-bold"
                            />
                            <Paragraph
                                content={el.content}
                                classes="text-[0.85rem] pb-0 pt-0"
                            />
                        </div>
                    ))}
                    <h4 className="text-muted font-bold pt-4">Disclaimers:</h4>
                    {declaimerContent.map((el, index) => (
                        <div key={index}>
                            <li className="py-1 list-disc text-[0.85rem]">
                                {el.content}{' '}
                            </li>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default TermsAndConditionContainer

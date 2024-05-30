import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import Paragraph from '../paragraph/Paragraph'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'

const ContactSupportContainer = () => {
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="Contact support"
                link="/profile"
                imageSrc="/assets/avatar.png"
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-screen pb-32 px-4 rounded-t-3xl">
                    <h3 className="text-left font-bold">
                        How can we help you?
                    </h3>
                    <Paragraph
                        content="We have a reliable support service that can answer all your worries. Just leave us a message or scan through our FAQs"
                        classes="text-[0.85rem] mb-8"
                    />
                    <div className="h-24 dashboard-summary rounded-lg flex justify-between items-center gap-4 p-4">
                        <p>
                            Would like to send us a <br /> direct message?
                        </p>
                        <Button
                            className="rounded-2xl bg-secondary w-16 h-3/4 text-white hover:bg-secondary flex justify-center items-center box-shadow"
                            asChild
                        >
                            <Link href={'/contact-us'} className="">
                                <ArrowRightIcon className="h-6 w-6 font-bold" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default ContactSupportContainer

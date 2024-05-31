import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import Paragraph from '../paragraph/Paragraph'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button } from '../ui/button'
import Header from '../header/Header'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import SearchBar from '../search-bar/SearchBar'

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
                <section className="bg-white pt-8 min-h-1/2 pb-32 px-4 rounded-t-3xl">
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
                    <Header title="FAQs" classes="text-center pt-4 font-bold" />
                    <small className="text-[0.65rem] text-center block">
                        Frequently asked questions
                    </small>
                    <SearchBar />
                    <Header title="Top questions" classes="pt-4 font-bold" />
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-[0.8rem]">
                                How long does certificate take to be ready?
                            </AccordionTrigger>
                            <AccordionContent className="">
                                Lorem ipsum dolor sit amet consectetur. Id
                                elementum amet fusce elit molestie dignissim. A
                                in sociis at vulputate. A in sociis at
                                vulputate.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-[0.8rem]">
                                Is it styled?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur. Id
                                elementum amet fusce elit molestie dignissim. A
                                in sociis at vulputate. A in sociis at
                                vulputate.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="text-[0.8rem]">
                                How long does certificate take to be ready?
                            </AccordionTrigger>
                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur. Id
                                elementum amet fusce elit molestie dignissim. A
                                in sociis at vulputate. A in sociis at
                                vulputate.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
            </div>
        </section>
    )
}

export default ContactSupportContainer

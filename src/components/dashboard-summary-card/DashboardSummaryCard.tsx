import React from 'react'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { dashboardSummaryData } from '../../../data'
import { Button } from '../ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const DashboardSummaryCard = () => {
    return (
        <div
            className={`px-4 min-h-[190px] min-w-full relative rounded-2xl ${dashboardSummaryData.length > 0 ? 'dashboard-summary mt-8' : 'dashboard-bg flex flex-col justify-center gap-y-4'} py-3`}
        >
            {dashboardSummaryData.length > 0 ? (
                <Header
                    title="Dashboard"
                    classes="font-bold text-2xl text-left"
                />
            ) : (
                <Header
                    title="Begin your request with Pro-Delivery"
                    classes="font-bold text-2xl text-white text-left"
                />
            )}
            {dashboardSummaryData.length > 0 ? (
                <Paragraph
                    content={'Your request summary'}
                    classes="text-sm text-left"
                />
            ) : (
                <Link
                    href={'/request-now'}
                    className="w-[10rem] rounded-lg text-white py-3 px-2 flex items-center gap-2 bg-secondary hover:bg-secondary"
                >
                    Make Request{' '}
                    <span>
                        <ArrowRightIcon className="w-6 h-6" />
                    </span>
                </Link>
            )}
            <div className="my-4">
                <Carousel
                    opts={{ align: 'start', loop: false }}
                    className="w-full mb-5"
                >
                    <CarouselContent className="ml-0 gap-4 w-full flex justify-between items-center">
                        {dashboardSummaryData.map((category, index) => (
                            <CarouselItem
                                key={index}
                                className={`basis-auto p-0 pr-4}`}
                            >
                                <div
                                    className={`bg-white dashboard-summary-text py-4 px-3 flex justify-center items-center flex-col rounded-md cursor-pointer`}
                                >
                                    <span className=" text-3xl font-black">
                                        {category.count}
                                    </span>
                                    <span className="capitalize">
                                        {category.option}
                                    </span>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default DashboardSummaryCard

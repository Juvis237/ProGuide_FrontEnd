'use client'
import React from 'react'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { whyCardData } from '../../../data'
import WhyUseCard from '../why-us-card/WhyUseCard'

const WhyChooseUs = () => {
    return (
        <div className="img-bg-why-us md:bg-none flex justify-center md:justify-start md:w-full">
            <div className="px-4 md:px-8 md:w-full">
                <Header
                    title="Why Choose Us"
                    classes="text-center text-white md:text-black font-bold text-2xl mt-[6.5rem]"
                />
                <Paragraph
                    content="Benefits of making us your number one"
                    classes="text-white text-center md:text-black"
                />
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{
                        align: 'start',
                    }}
                    className="w-full max-w-xs md:w-full md:max-w-full"
                >
                    <CarouselContent>
                        {whyCardData.map((card, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/2"
                            >
                                <WhyUseCard
                                    imgSrc={card.imgSrc}
                                    title={card.title}
                                    content={card.content}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default WhyChooseUs

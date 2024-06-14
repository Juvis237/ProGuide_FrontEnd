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
        <div className="img-bg-why-us flex justify-center">
            <div className="px-4">
                <Header
                    title="Why Choose Us"
                    classes="text-center text-white font-bold text-2xl mt-[6.5rem]"
                />
                <Paragraph
                    content="Benefits of making us your number one"
                    classes="text-white text-center "
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
                    className="w-full max-w-xs"
                >
                    <CarouselContent>
                        {whyCardData.map((card, index) => (
                            <CarouselItem
                                key={index}
                                className="md:basis-1/2 lg:basis-1/4"
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

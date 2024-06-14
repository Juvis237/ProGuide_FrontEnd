'use client'
import React, { useState } from 'react'
import { requestStatus } from '../../../data'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

const RequestStatusBar = () => {
    const [activeCategory, setActiveCategory] = useState('all')
    const handleCategoryToggle = (categoryName: string) => {
        setActiveCategory(categoryName)
        console.log(categoryName)
    }
    return (
        <div className="my-4">
            <Carousel
                opts={{ align: 'start', loop: false }}
                className="w-full mb-5  bg-primary-foreground py-3 px-3 rounded-[2rem]"
            >
                <CarouselContent className="ml-0 gap-4 w-full flex justify-between items-center">
                    {requestStatus.map((category, index) => (
                        <CarouselItem
                            key={index}
                            className={`basis-auto p-0 pr-4}`}
                        >
                            <Button
                                onClick={() => handleCategoryToggle(category)}
                                className={`py-5 text-[0.8rem] px-4 capitalize ${category === 'all' && 'px-6 py-4'} ${category === activeCategory ? 'bg-primary rounded-3xl' : 'text-primary bg-transparent border-none shadow-none hover:bg-transparent'}`}
                            >
                                {category}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

export default RequestStatusBar

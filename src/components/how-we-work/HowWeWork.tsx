import React from 'react'
import Header from '../header/Header'
import Paragraph from '../paragraph/Paragraph'
import { howWeWorkData } from '../../../data'
import WorkCard from '../work-card/WorkCard'

const HowWeWork = () => {
    return (
        <div className="bg-primary mt-8">
            <div className="p-4">
                <Header
                    title="How We Work"
                    classes="text-secondary text-center text-2xl py-3 font-bold"
                />
                <Paragraph
                    content="The process of obtianing an academic document through is is very seamless "
                    classes="text-white text-center mb-4"
                />
                {howWeWorkData.map((item, index) => (
                    <WorkCard
                        key={index}
                        imgSrc={item.icon}
                        title={item.title}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default HowWeWork

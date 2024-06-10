import React from 'react'
import HeaderNav from '../header-nav/HeaderNav'
import { about } from '../../../data'
import Paragraph from '../paragraph/Paragraph'

const AboutContainer = () => {
    return (
        <section className="w-full min-h-screen bg-primary">
            <HeaderNav
                title="About Pro-Guide"
                link="/profile"
                imageSrc="/assets/avatar.png"
                marginTop="pt-8"
            />
            <div className="pt-12">
                <section className="bg-white pt-8 min-h-1/2 pb-32 px-4 rounded-t-3xl">
                    <h3 className="py-3 text-secondary text-lg font-bold uppercase">
                        About
                    </h3>
                    {about.map((el, index) => (
                        <div key={index}>
                            <h4 className="text-muted font-bold">{el.title}</h4>
                            <Paragraph
                                content={el.description}
                                classes="text-[0.8rem]"
                            />
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}

export default AboutContainer

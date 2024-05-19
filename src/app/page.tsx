import Hero from '@/components/hero/Hero'
import Nav from '@/components/nav/Nav'
import WhyChooseUs2 from '@/components/why-choose-us-2/WhyChooseUs2'
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Nav />
            <Hero />
            <WhyChooseUs />
            <WhyChooseUs2 />
        </main>
    )
}

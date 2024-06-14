import Hero from '@/components/hero/Hero'
import HowWeWork from '@/components/how-we-work/HowWeWork'
import Nav from '@/components/nav/Nav'
import RequestNow from '@/components/request-now/RequestNow'
import WhyChooseUs2 from '@/components/why-choose-us-2/WhyChooseUs2'
import WhyChooseUs from '@/components/why-choose-us/WhyChooseUs'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Nav />
            <Hero />
            <WhyChooseUs />
            <WhyChooseUs2 />
            <HowWeWork />
            <RequestNow />
        </main>
    )
}

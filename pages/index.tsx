import {ReactNode} from 'react';
import Head from 'next/head';
import Marquee from 'react-fast-marquee';
import Layout from '../components/Layout';
import {getEventsList, Event} from '../utils/sheets';
import {EventCard} from '../components/EventCard';
import {readdirSync} from 'fs';


export default function Home(props: {images: string[], upcoming: Event[]}) {
    return (
        <Layout>
            <Head>
                <title>Events | SEC</title>
                <meta name="description" content="Everything you need to know about SEC events." />
            </Head>

            <section className="container flex gap-8 mb-10">
                <img src="/gunn.jfif" alt="Gunn logo" className="hidden md:block w-32 h-32 rounded-2xl shadow-xl" />
                <div className="flex-grow min-w-0">
                    <h1 className="font-bold text-8xl sm:text-9xl text-transparent bg-gradient-to-br from-[#ff594c] via-red-500 to-pink-500 bg-clip-text mb-4 -mt-2">
                        Events | SEC
                    </h1>
                    <p className="mb-4">
                        {/* TODO: wording */}
                        Everything you need to know about events at Gunn. Upcoming events:
                    </p>
                    {/* TODO: this grid columns breakpoint is a bit hacky */}
                    <section className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,_minmax(375px,_1fr))] gap-2">
                        {props.upcoming.map(event => (
                            <EventCard {...event} key={event.name + event.date} />
                        ))}
                    </section>
                </div>
            </section>

            <section className="bg-light dark:bg-dark py-12">
                <Marquee className="events-marquee gap-1.5" gradientWidth={125}>
                    {props.images.map(image => (
                        <img src={image} alt="Event image" className="max-h-64" />
                    ))}
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                </Marquee>
            </section>

            <Section name="Feedback">
                <p className="mb-4">
                    Have urgent feedback for SEC about an event taking place? Want to tell us about an awesome dress-up
                    day idea you had? Have literally anything else you want SEC to know or address? Feel free to share
                    your thoughts with us using the feedback form below!
                </p>
                <a href="https://forms.gle/HYQzc48S8eoyQxdk8" target="_blank" rel="noopener noreferrer" tabIndex={-1}>
                    <button className="text-white font-medium px-3.5 py-2 rounded-md shadow-lg shadow-red-500 dark:shadow-red-700 bg-gradient-to-br from-[#ff594c] via-red-500 to-pink-500 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-[0xFF7DADD9]">
                        Give feedback
                    </button>
                </a>
            </Section>

            <Section name="API">
                <p>
                    SEC encourages open-source creators at Gunn to spread the word about school events, and developers
                    wishing to do so can leverage the events API. Read the API docs here.
                </p>
            </Section>
        </Layout>
    )
}

function Section(props: {name: string, children: ReactNode}) {
    return (
        <section className="container mt-24 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="sm:flex-none sm:w-56 sm:text-right">
                <h3 className="font-bold text-4xl">{props.name}</h3>
            </div>
            <div className="sm:pt-1">
                {props.children}
            </div>
        </section>
    )
}

// Get the event images urls for the home page marquee and the next 3 events for the upcoming section.
export async function getStaticProps() {
    const images = readdirSync('./public/events').map(image => `/events/${image}`);

    const events = await getEventsList();
    const upcoming = events
        ?.filter((event: Event) => event.date > new Date().toISOString().slice(5, 10))
        .slice(0, 3)
        ?? [];

    return {
        props: {images, upcoming},
        revalidate: 60
    }
}

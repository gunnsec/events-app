import Head from 'next/head';
import Marquee from 'react-fast-marquee';
import Layout from '../components/Layout';
import {getEventsList, Event} from '../utils/sheets';
import {EventCard} from '../components/EventCard';


export default function Home(props: {upcoming: Event[]}) {
    return (
        <Layout>
            <Head>
                <title>Events | SEC</title>
                <meta name="description" content="Everything you need to know about SEC events." />
            </Head>

            <section className="container flex gap-8 mb-12">
                <img src="/gunn.jfif" alt="Gunn logo" className="hidden md:block w-32 h-32 rounded-2xl shadow-xl" />
                <div className="pt-4 flex-grow min-w-0">
                    <h1 className="font-bold text-7xl mb-4">Events | SEC</h1>
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

            <section className="bg-light dark:bg-dark py-16">
                <Marquee className="events-marquee gap-1.5" gradientWidth={125}>
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                    <img src="/hoco.JPG" alt="Homecoming" className="max-h-64" />
                </Marquee>
            </section>

            <section className="container py-20">
                <h3 className="font-bold text-4xl mb-4">Feedback</h3>
                <p>
                    Have urgent feedback for SEC about an event taking place? ___.
                </p>
            </section>

            <section className="container">
                <h3 className="font-bold text-4xl mb-4">API</h3>
                <p>
                    SEC encourages open-source creators at Gunn to spread the word about school events, and developers
                    wishing to do so can leverage the events API. Read the API docs here.
                </p>
            </section>
        </Layout>
    )
}

// Get the next 3 upcoming events to display on the home page.
export async function getStaticProps() {
    const events = await getEventsList();
    const upcoming = events
        ?.filter((event: Event) => event.date > new Date().toISOString().slice(5, 10))
        .slice(0, 3)
        ?? [];

    return {
        props: {upcoming},
        revalidate: 60
    }
}

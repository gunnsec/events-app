import {ReactNode} from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import EventCard from '../components/EventCard';
import {getEventsList, Event} from '../util/sheets';


export default function Events(props: {events: {[key: string]: Event[]}}) {
    return (
        <Layout>
            <Head>
                <title>Events List | SEC</title>
                <meta name="description" content="A list of all school events." />
            </Head>

            <h1 className="text-center text-3xl font-bold mt-24 mb-8">List of all school events:</h1>

            <section className="container lg:columns-2 gap-6 space-y-6 mb-24">
                {Object.entries(props.events).map(([month, events]) => (
                    <EventMonth month={month} key={month}>
                        {events.map((event) => (
                            <EventCard {...event} key={event.name + event.date}/>
                        ))}
                    </EventMonth>
                ))}
            </section>
        </Layout>
    )
}

function EventMonth(props: {month: string, children: ReactNode}) {
    return (
        <section>
            <h2 className="text-sm font-medium mb-2">{props.month}</h2>
            <div className="flex flex-col gap-2">
                {props.children}
            </div>
        </section>
    )
}

// Get the events list and map months to events occurring on that month.
export async function getStaticProps() {
    const events = await getEventsList();
    const parsed: {[key: string]: Event[]} = {};

    events?.forEach((event) => {
        const date = new Date();
        date.setMonth(Number(event.date.split('-')[0]) - 1);
        const month = date.toLocaleString('en-US', {month: 'long'});

        if (!parsed[month]) parsed[month] = [];
        parsed[month].push(event);
    })

    return {
        props: {events: parsed},
        revalidate: 60
    }
}

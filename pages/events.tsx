import Head from 'next/head';
import {ReactNode} from 'react';
import {getEventsList} from '../utils/sheets';


export default function Events(props: {events: {[key: string]: Event[]}}) {
    return (
        <div className="container py-24">
            <Head>
                <title>Events List | SEC</title>
                <meta name="description" content="A list of all school events." />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className="text-xl font-semibold mb-4">List of all school events:</h1>

            <section className="columns-2 gap-6 space-y-6">
                {Object.entries(props.events).map(([month, events]) => (
                    <EventMonth month={month}>
                        {events.map((event) => <EventCard {...event} />)}
                    </EventMonth>
                ))}
            </section>
        </div>
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

function EventCard(props: Event) {
    return (
        <div className="flex gap-3 rounded-lg overflow-hidden border border-gray-300">
            <img src="/hoco.JPG" className="w-24 object-cover" alt="hoco" />
            <div className="p-4">
                <h3 className="font-medium">{props.name}</h3>
                <p className="text-gray-400 text-sm">{props.shortDesc}</p>
            </div>
        </div>
    )
}

type Event = {name: string, shortDesc: string, longDesc: string, date: string, finalized: boolean};
export async function getStaticProps() {
    const events = await getEventsList();
    const parsed: {[key: string]: Event[]} = {};

    events?.forEach(([name, shortDesc, longDesc, month, date, finalized]) => {
        if (!parsed[month]) parsed[month] = [];
        parsed[month].push({name, shortDesc, longDesc, date, finalized});
    })

    return {
        props: {events: parsed}
    }
}

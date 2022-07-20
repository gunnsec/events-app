import Head from 'next/head';
import {ReactNode} from 'react';


export default function Events() {
    return (
        <div className="container py-24">
            <Head>
                <title>Events List | SEC</title>
                <meta name="description" content="A list of all school events." />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className="text-xl font-semibold mb-4">List of all school events:</h1>

            <section className="columns-2 space-y-6">
                <EventMonth month="September">
                    <EventCard />
                    <EventCard />
                </EventMonth>
                <EventMonth month="October">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </EventMonth>
                <EventMonth month="November">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </EventMonth>
                <EventMonth month="December">
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </EventMonth>
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

function EventCard() {
    return (
        <div className="flex gap-3 rounded-lg overflow-hidden border border-gray-300">
            <img src="/hoco.JPG" className="w-24 object-cover" alt="hoco" />
            <div className="p-4">
                <h3 className="font-medium">Homecoming</h3>
                <p className="text-gray-400 text-sm">
                    A week in October celebrating the first football game of the season.
                </p>
            </div>
        </div>
    )
}

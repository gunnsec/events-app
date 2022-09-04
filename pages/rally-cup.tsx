import {useEffect, useState} from 'react';
import Head from 'next/head';

// Components
import Layout from '../components/Layout';
import Section from '../components/Section';
import EventCard from '../components/EventCard';

// Utils
import {Event, filterUpcomingEvents, getEventsList, RallyCupClassStandings} from '../util/sheets';


export default function RallyCup(props: {upcoming: Event[]}) {
    const [standings, setStandings] = useState<RallyCupClassStandings[]>([]);
    const [maxPoints, setMaxPoints] = useState(0);

    // Fetch standings on mount
    useEffect(() => {
        fetch('/api/rally-cup').then(res => res.json()).then((json: RallyCupClassStandings[]) => {
            setStandings(json);
            setMaxPoints(json.map(x => x.total).reduce((prev, p) => p > prev ? p : prev));
        });
    }, []);

    return (
        <Layout>
            <Head>
                <title>Rally Cup | SEC</title>
                <meta name="description" content="The home page of the annual Gunn Rally Cup!" />
            </Head>

            <section className="relative text-white h-[48rem] bg-light dark:bg-dark">
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <h1 className="text-7xl font-bold mb-3">Rally Cup</h1>
                    <p className="max-w-prose text-center">
                        An ancient tradition has returned! Battle throughout the year at rallies and events for class
                        points towards the rally cup. At the end of the year, the class with the most points is awarded
                        the cup!
                    </p>
                </div>
                <img src="/ghs.png" alt="Gunn" className="absolute inset-0 h-full w-full object-cover object-bottom" />
            </section>

            <Section secondary>
                <h3 className="text-3xl font-bold mb-6">Current standings:</h3>
                <div className="flex flex-col gap-3 pl-6">
                    {standings.map(classStanding => <RallyCupRow {...classStanding} max={maxPoints} />)}
                </div>
            </Section>
            <Section>
                <h3 className="text-3xl font-bold mb-6">Upcoming events:</h3>
                <div className="grid grid-cols-[repeat(auto-fill,_minmax(375px,_1fr))] gap-2 pl-6">
                    {props.upcoming.map(event => (
                        <EventCard {...event} key={event.name + event.date} />
                    ))}
                </div>
            </Section>
        </Layout>
    )
}

function RallyCupRow(props: RallyCupClassStandings & {max: number}) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-midnight font-medium">
                {props.name}
            </div>
            <div className="flex-grow">
                <h5 className="font-medium mb-2">{props.name}</h5>
                <div className="flex gap-4">
                    <div
                        className="h-6 bg-midnight animate-pulse rounded-full"
                        style={{width: props.total / props.max * 100 + '%'}}
                    />
                    {props.total}
                </div>
            </div>
        </div>
    )
}

// Gets upcoming rally cup events.
// TODO: currently this just pulls from the events list, which isn't accurate to which events give rally cup points.
// We'll need a completely separate system for that, possibly even with a separate host of types and APi routes.
export async function getStaticProps() {
    const events = await getEventsList();
    const upcoming = filterUpcomingEvents(events) ?? [];

    return {
        props: {upcoming},
        revalidate: 60
    }
}

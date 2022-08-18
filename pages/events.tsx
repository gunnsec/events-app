import {ReactNode, useState, Fragment} from 'react';
import Head from 'next/head';
import {Dialog, Transition} from '@headlessui/react';
import Layout from '../components/Layout';
import {getEventsList, Event} from '../utils/sheets';


export default function Events(props: {events: {[key: string]: Event[]}}) {
    return (
        <Layout>
            <Head>
                <title>Events List | SEC</title>
                <meta name="description" content="A list of all school events." />
            </Head>

            <h1 className="text-center text-3xl font-bold mb-8">List of all school events:</h1>

            <section className="container lg:columns-2 gap-6 space-y-6">
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

function EventCard(props: Event) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex gap-3 rounded-lg cursor-pointer overflow-hidden border border-gray-300 hover:border-gray-500 dark:border-gray-600 dark:hover:border-gray-300 transition duration-200" onClick={() => setOpen(true)}>
                <img src="/hoco.JPG" className="w-24 object-cover" alt="hoco" />
                <div className="p-4">
                    <h3 className="font-medium">
                        {props.name} – ({props.date}){!props.finalized && <span className="text-red-600">*</span>}
                    </h3>
                    <p className="text-gray-400 text-sm">{props.shortDesc}</p>
                </div>
            </div>

            <Transition show={open} as={Fragment}>
                <Dialog onClose={() => setOpen(false)} className="fixed z-30 inset-0 flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="relative max-w-xl bg-white dark:bg-zinc-800 rounded-md px-7 py-5 shadow-xl">
                            <Dialog.Title className="text-lg font-medium -mt-1 mb-2">
                                {props.name}
                            </Dialog.Title>

                            <img src="/hoco.JPG" className="mb-4" alt="hoco" />

                            <Dialog.Description className="whitespace-pre-wrap">
                                {props.longDesc}
                            </Dialog.Description>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    )
}

// Get the events list and map months to events occurring on that month.
export async function getStaticProps() {
    const events = await getEventsList();
    const parsed: {[key: string]: Event[]} = {};

    events?.forEach((event) => {
        if (!parsed[event.month]) parsed[event.month] = [];
        parsed[event.month].push(event);
    })

    return {
        props: {events: parsed},
        revalidate: 60
    }
}

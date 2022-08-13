import Head from 'next/head';
import Marquee from 'react-fast-marquee';
import Layout from '../components/Layout';


export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Events | SEC</title>
                <meta name="description" content="Everything you need to know about SEC events." />
            </Head>

            <section className="container flex gap-8 mb-12">
                <img src="/gunn.jfif" alt="Gunn logo" className="w-32 h-32 rounded-2xl shadow-xl" />
                <div className="pt-4">
                    <h1 className="font-bold text-7xl mb-4">Events | SEC</h1>
                    <p>Everything you need to know about events at Gunn.</p>
                </div>
            </section>

            <section className="bg-gray-100 dark:bg-zinc-800 py-16">
                <Marquee className="events-marquee gap-1.5" gradientWidth={150}>
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

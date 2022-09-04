import Head from 'next/head';
import Layout from '../components/Layout';


export default function RallyCup() {
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

            <section className="bg-light dark:bg-dark py-12">
                <div className="container">
                    <h3>Current standings:</h3>
                </div>
            </section>
        </Layout>
    )
}

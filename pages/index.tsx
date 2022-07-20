import Head from 'next/head';


export default function Home() {
    return (
        <div className="bg-gradient-to-br from-pink-500 via-red-500 to-orange-500 h-screen flex items-center justify-center">
            <Head>
                <title>Events App</title>
                <meta name="description" content="An app for keeping track of SEC events." />
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="w-64 p-6 bg-white rounded-lg">
                <h1 className="text-2xl font-medium mb-2">Events app</h1>
                <p>Created with love by the SEC.</p>
            </main>
        </div>
    )
}

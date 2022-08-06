import {ReactNode} from 'react';
import Head from 'next/head';


// TODO: responsive design (the title and event description die-by-side should probably be a `flex-wrap lg:flex-nowrap`
// and the image cards need to wrap on small screens too)
export default function Home() {
    return (
        <div>
            <Head>
                <title>Events App</title>
                <meta name="description" content="An app for keeping track of SEC events." />
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
            </Head>

            <main className="container py-24">
                <section className="flex gap-8 justify-between mb-16">
                    <div>
                        <h1 className="font-[Limelight] font-medium text-9xl underline decoration-2 underline-offset-4 -mb-12">
                            Home-
                        </h1>
                        <h1 className="font-[Limelight] font-medium text-9xl underline decoration-2 underline-offset-4 pl-16 mb-6">
                            coming!
                        </h1>
                        <div className="flex items-center">
                            <h3 className="font-[Limelight] font-bold text-3xl pr-4">DAY 4</h3>
                            <h3 className="pl-4 border-l-2 border-gray-400 text-lg">
                                <strong className="font-medium">THEME:</strong> Red
                            </h3>
                        </div>
                    </div>
                    <div className="border-l border-gray-400 px-8 py-4 h-max">
                        <h5 className="font-bold">BRUNCH:</h5>
                        <p className="mb-4">Balloon Stomp</p>
                        <h5 className="font-bold">LUNCH:</h5>
                        <p>Obstacle Course</p>
                    </div>
                </section>

                <section className="flex gap-8 mb-16">
                    <ImageCard src="/hoco.JPG" title="Balloon Stomp">
                        Teams of two try to stomp out the competition.
                    </ImageCard>
                    <ImageCard src="/hoco.JPG" title="Obstacle Course">
                        Obstacle course!
                    </ImageCard>
                </section>

                <section>
                    <h3 className="font-medium text-gray-400 mb-4">Current standings:</h3>
                    {/* TODO: abstract these, think of a way of converting points -> width */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-red-500" />
                            <div className="w-48 h-3 rounded-full bg-black/30 animate-pulse" />
                            <p className="font-medium">600</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-zinc-900" />
                            <div className="w-32 h-3 rounded-full bg-black/30 animate-pulse" />
                            <p className="font-medium">400</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-lime-500" />
                            <div className="w-16 h-3 rounded-full bg-black/30 animate-pulse" />
                            <p className="font-medium">200</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-yellow-500" />
                            <div className="w-16 h-3 rounded-full bg-black/30 animate-pulse" />
                            <p className="font-medium">200</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

function ImageCard(props: {src: string, title: string, children: ReactNode}) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={props.src} alt={props.title} className="w-[32rem] h-80 object-cover" />
            <div className="p-5">
                <h5 className="font-medium">{props.title}</h5>
                <p className="text-gray-400">{props.children}</p>
            </div>
        </div>
    )
}

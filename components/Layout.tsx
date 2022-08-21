import {ReactNode} from 'react';
import Header from './Header';
import Footer from './Footer';


export default function Layout(props: {children: ReactNode}) {
    return (
        <div className="h-full flex flex-col gap-24">
            <Header />
            <main className="flex-grow">
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

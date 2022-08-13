import {ReactNode} from 'react';
import Header from './Header';
import Footer from './Footer';


export default function Layout(props: {children: ReactNode}) {
    return (
        <div className="space-y-24">
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

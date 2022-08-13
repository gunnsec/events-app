import {ReactNode} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useScroll} from '../utils/useScroll';


export default function Header() {
    const scroll = useScroll();

    return (
        <header className={'flex items-center sticky top-0 z-20 bg-white/90 backdrop-blur-sm px-8 transition duration-300 ' + (scroll > 0 ? 'shadow-md' : 'hover:shadow-md')}>
            <img src="https://www.gunnsec.org/uploads/1/2/3/2/123265564/graphiconly.png" alt="SEC logo" className="w-8 h-8 mr-3" />
            <NavLink href="/">Home</NavLink>
            <NavLink href="/events">Events</NavLink>
        </header>
    )
}

function NavLink(props: {href: string, children: ReactNode}) {
    const {pathname} = useRouter();
    const active = pathname === props.href;

    return (
        <Link href={props.href}>
            <a className={'block p-5 hover:bg-gray-100 transition duration-300' + (active ? ' font-medium' : '')}>
                {props.children}
            </a>
        </Link>
    )
}

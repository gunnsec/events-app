import {ReactNode} from 'react';


// A reusable `Section` component which wraps a container around its children.
export default function Section(props: {children: ReactNode, secondary?: boolean, id?: string}) {
    return (
        <section className={'py-16' + (props.secondary ? ' bg-light dark:bg-dark' : '')} id={props.id}>
            <div className="container">
                {props.children}
            </div>
        </section>
    )
}

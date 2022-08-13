import {BiSun} from 'react-icons/bi';


// https://github.com/ky28059/ky28059.github.io/blob/main/components/ThemeToggle.tsx
export default function ThemeToggle(props: {className?: string}) {
    const toggleTheme = () => document.documentElement.classList.toggle('dark');
    return (
        <BiSun className={props.className} onClick={toggleTheme} />
    )
}

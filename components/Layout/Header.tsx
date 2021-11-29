import React from 'react'
import Link from 'next/link'
import classes from './header.module.css'
interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <header className={classes.header}>
                <div className={classes.logo}>
                    <Link href="/">NextEvents</Link>
                </div>
                <nav className={classes.navigation}>
                    <ul>
                        <li>
                             <Link href="/events">Browse Events</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        );
}
export default Header
import React from 'react';
import { Link } from 'gatsby';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import Logo from '../icons/Logo';

const links = [
    {
        title: 'About',
        url: '/about',
    },
    {
        title: 'Commissions',
        url: '/commisions',
    },
];

const Header = () => {
    return (
        <header className="py-4 md:py-8 text-primary-contrast sticky top-0 bg-primary z-50">
            <nav className="container flex justify-between items-center">
                <Link className="h-16 w-28 md:w-40" to="/">
                    <Logo className="h-full w-full" />
                </Link>
                <div className="flex space-x-4 md:space-x-8">
                    <ThemeToggler />
                    <ul className="text-base md:text-lg flex space-x-3 tracking-wide">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link
                                    to={link.url}
                                    activeClassName="border-b-2 border-primary-accent pb-1"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;

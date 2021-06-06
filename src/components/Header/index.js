import React from 'react';
import { Link } from 'gatsby';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

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
        <header className="py-4 md:py-8 text-primary-contrast">
            <nav className="container flex justify-between items-center">
                <Link className="h-16 w-16" to="/">
                    <div className="h-full w-full bg-gray-500"></div>
                </Link>
                <div className="flex space-x-8">
                    <ThemeToggler />
                    <ul className="text-lg flex space-x-3">
                        {links.map((link, i) => (
                            <li key={i}>
                                <Link to={link.url}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;

import React from 'react';
import { Link } from 'gatsby';

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
        <header className="bg-primary py-4 md:py-8">
            <nav className="container flex justify-between items-center">
                <Link className="h-16 w-16" to="/">
                    <div className="h-full w-full bg-gray-500"></div>
                </Link>
                <ul className="text-lg flex space-x-3">
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link to={link.url}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;

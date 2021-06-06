import React from 'react';
import { Link } from 'gatsby';

const links = [
    {
        title: 'About',
        url: '/about',
    },
];

const Header = () => {
    return (
        <header className="bg-primary py-8">
            <nav className="container flex justify-between items-center">
                <div className="h-16 w-16 bg-gray-500"></div>
                <ul className="text-lg">
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

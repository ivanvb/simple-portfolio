import React from 'react';
import { FaDeviantart, FaTwitter, FaInstagram, FaTwitch, FaPinterest } from 'react-icons/fa';

const socialLinks = [
    {
        url: 'https://devianart.com',
        Icon: <FaDeviantart />,
    },
    {
        url: 'https://pinterest.com',
        Icon: <FaPinterest />,
    },
    {
        url: 'https://instagram.com',
        Icon: <FaInstagram />,
    },
    {
        url: 'https://twitter.com',
        Icon: <FaTwitter />,
    },
    {
        url: 'https://twitch.com',
        Icon: <FaTwitch />,
    },
];

const SocialLink = ({ url, Icon }) => {
    return (
        <a
            href={url}
            rel="noopener noreferer"
            target="_blank"
            className="hover:text-primary-accent"
        >
            {React.cloneElement(Icon, {
                color: 'currentColor',
                className: 'transition-colors duration-300',
            })}
        </a>
    );
};

const Footer = () => {
    return (
        <footer className="container pt-6 pb-4 flex flex-col md:flex-row justify-between items-center">
            <span className="order-2 md:order-1 block text-center md:text-left text-sm">
                © Copyright 2021 - Present
            </span>
            <div className="flex space-x-4 justify-center md:justify-start mb-4 md:mb-0 order-1 md:order-2 items-center">
                {socialLinks.map((link, i) => (
                    <SocialLink key={i} {...link} />
                ))}
            </div>
        </footer>
    );
};

export default Footer;

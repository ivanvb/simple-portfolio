import React from 'react';
import { FaDeviantart, FaTwitter, FaInstagram, FaTwitch, FaPinterest } from 'react-icons/fa';
import { useStaticQuery, graphql } from 'gatsby';

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
    const { datoCmsSocialLink: cmsSocialLinks } = useStaticQuery(graphql`
        query {
            datoCmsSocialLink {
                devianart
                pinterest
                twitter
                instagram
                twitch
            }
        }
    `);

    const socialLinks = [
        {
            url: cmsSocialLinks.devianart || null,
            Icon: <FaDeviantart />,
        },
        {
            url: cmsSocialLinks.pinterest || null,
            Icon: <FaPinterest />,
        },
        {
            url: cmsSocialLinks.instagram || null,
            Icon: <FaInstagram />,
        },
        {
            url: cmsSocialLinks.twitter || null,
            Icon: <FaTwitter />,
        },
        {
            url: cmsSocialLinks.twitch || null,
            Icon: <FaTwitch />,
        },
    ];

    return (
        <footer className="container pt-12 pb-8 flex flex-col md:flex-row justify-between items-center">
            <span className="order-2 md:order-1 block text-center md:text-left text-sm">
                © Copyright 2021 - Present
            </span>
            <div className="flex space-x-4 justify-center md:justify-start mb-4 md:mb-0 order-1 md:order-2 items-center">
                {socialLinks.map((link, i) => {
                    if (link.url === null) return null;

                    return <SocialLink key={i} {...link} />;
                })}
            </div>
        </footer>
    );
};

export default Footer;

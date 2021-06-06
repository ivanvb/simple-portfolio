import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

const PageIntro = ({ img, alt = '', title, subtitle, paragraphs, reverse = false }) => {
    return (
        <section className="container pt-4 md:pt-8 pb-4 md:pb-12">
            <div className="flex flex-col md:flex-row">
                <div
                    className={classNames(
                        'w-full md:w-1/2 order-1',
                        reverse ? 'md:order-2' : 'md:mr-8 lg:mr-16'
                    )}
                >
                    <GatsbyImage image={img} alt={alt} className="w-full shadow" />
                </div>
                <div
                    className={classNames(
                        'w-full md:w-1/2 mt-4 md:mt-0 order-2',
                        reverse ? 'md:order-1 md:mr-8 lf:mr-16' : ''
                    )}
                >
                    <h1 className="text-2xl md:text-3xl font-extrabold">{title}</h1>
                    <h2 className="text-2xl text-primary-accent font-semibold">{subtitle}</h2>
                    <div className="flex flex-col space-y-4 py-2 md:py-4 opacity-70">
                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageIntro;

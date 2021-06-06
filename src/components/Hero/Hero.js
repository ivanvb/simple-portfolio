import React from 'react';

const Hero = ({ topText, bottomText }) => {
    return (
        <section className="container my-6 md:my-10">
            <h2 className="text-3xl md:text-4xl font-extrabold md:font-black leading-9 md:leading-12">
                <span className="block">{topText}</span>
                <span className="text-primary-accent">{bottomText}</span>
            </h2>
        </section>
    );
};

export default Hero;

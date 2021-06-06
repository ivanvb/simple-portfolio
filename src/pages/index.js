import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero/Hero';

const IndexPage = () => {
    return (
        <>
            <Seo title="Home" />
            <Hero
                topText="Hello, I'm Johnny"
                bottomText="I'm a Graphics Designer based in Amsterdam 🇳🇱"
            />
        </>
    );
};

export default IndexPage;

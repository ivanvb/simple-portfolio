import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import { graphql } from 'gatsby';

const IndexPage = ({ data: { allFile: images } }) => {
    return (
        <>
            <Seo title="Home" />
            <Hero
                topText="Hello, I'm Johnny"
                bottomText="I'm a Graphics Designer based in Amsterdam 🇳🇱"
            />
            <Gallery
                items={images.edges.map(({ node: img }) => {
                    return {
                        img: {
                            gatsbyImageData: img.childImageSharp.gatsbyImageData,
                            alt: '',
                        },
                        url: '/',
                        title: 'The large eye',
                        description: "This is a very large eye, isn't it?",
                    };
                })}
            />
        </>
    );
};

export const query = graphql`
    query {
        allFile(filter: { relativePath: { regex: "/artwork/" } }) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(width: 500)
                    }
                }
            }
        }
    }
`;

export default IndexPage;

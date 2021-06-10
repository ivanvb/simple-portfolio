import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/Gallery';
import { graphql } from 'gatsby';

const IndexPage = ({ data: { datoCmsHomePage: homeData } }) => {
    return (
        <>
            <Seo title="Home" />
            <Hero topText={homeData.herotitle} bottomText={homeData.herosubtitle} />
            <Gallery
                items={homeData.drawings.map((item) => {
                    return {
                        img: {
                            gatsbyImageData: item.image.gatsbyImageData,
                            alt: item.image.alt,
                            x: item.image.focalPoint.x,
                            y: item.image.focalPoint.y,
                        },
                        url: `/art/${item.url}`,
                        title: item.title,
                        description: item.shortDescription,
                    };
                })}
            />
        </>
    );
};

export const query = graphql`
    query {
        datoCmsHomePage {
            herotitle
            herosubtitle
            drawings {
                title
                shortDescription
                url
                image {
                    gatsbyImageData(width: 500)
                    alt
                    focalPoint {
                        x
                        y
                    }
                }
            }
        }
    }
`;

export default IndexPage;

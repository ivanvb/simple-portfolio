import { graphql } from 'gatsby';
import React from 'react';
import CommisionsBanner from '../components/CommissionsBanner/CommisionsBanner';
import PageIntro from '../components/PageIntro/PageIntro';
import Seo from '../components/Seo';

const Drawing = ({ data }) => {
    const {
        datoCmsDrawing: { title, shortDescription, description, image },
    } = data;

    return (
        <>
            <Seo title={title} image={{ src: image.url }} />
            <PageIntro
                img={image.gatsbyImageData}
                alt={image.alt}
                title={title}
                subtitle={shortDescription}
                paragraphs={description.split('\n\n')}
            />
            <CommisionsBanner />
        </>
    );
};

export const query = graphql`
    query ($title: String!) {
        datoCmsDrawing(title: { eq: $title }) {
            title
            shortDescription
            description
            image {
                gatsbyImageData(width: 1140)
                alt
                url
            }
        }
    }
`;

export default Drawing;

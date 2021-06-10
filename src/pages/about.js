import React from 'react';
import PageIntro from '../components/PageIntro/PageIntro';
import CommisionsBanner from '../components/CommissionsBanner/CommisionsBanner';
import Seo from '../components/Seo';
import { graphql } from 'gatsby';

const About = ({ data: { datoCmsAboutPage: pageData } }) => {
    return (
        <>
            <Seo title="About" />
            <PageIntro
                img={pageData.image.gatsbyImageData}
                alt={pageData.image.alt}
                title={pageData.title}
                subtitle={pageData.subtitle}
                paragraphs={pageData.description.split('\n\n')}
                reverse
            />
            <CommisionsBanner />
        </>
    );
};

export const query = graphql`
    query {
        datoCmsAboutPage {
            title
            subtitle
            description
            image {
                gatsbyImageData(width: 1160)
                alt
            }
        }
    }
`;

export default About;

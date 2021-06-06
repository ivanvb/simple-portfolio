import React from 'react';
import PageIntro from '../components/PageIntro/PageIntro';
import CommisionsBanner from '../components/CommissionsBanner/CommisionsBanner';
import { graphql } from 'gatsby';

const About = ({ data }) => {
    return (
        <>
            <PageIntro
                img={data.file.childImageSharp.gatsbyImageData}
                title="About the Author"
                subtitle="Who is the person behind these paintings?"
                paragraphs={[
                    'Dolore enim esse voluptate reprehenderit eiusmod sit irure pariatur adipisicing aliquip sint sunt laborum ea. Ipsum ipsum nulla elit cillum laborum laborum ea ad eiusmod aute ut. Ad sunt sit reprehenderit irure labore tempor adipisicing magna labore aute dolor amet ut. Voluptate fugiat incididunt aliquip Lorem labore ea occaecat minim ut sunt. Non non id labore voluptate consectetur consectetur veniam laboris ut officia id duis. Consectetur qui occaecat ex anim. Mollit eiusmod sint est in incididunt nulla.',
                    'Laboris sint eu aute labore laborum magna. Nostrud sint ipsum Lorem est excepteur velit. Amet reprehenderit do reprehenderit pariatur do tempor amet dolore adipisicing non. Et exercitation laborum elit voluptate 😎. Eiusmod minim nulla labore eu enim ipsum dolor fugiat ipsum incididunt non. Fugiat voluptate consectetur culpa et.',
                ]}
                reverse
            />
            <CommisionsBanner />
        </>
    );
};

export const query = graphql`
    query {
        file(name: { eq: "dartwork-1" }) {
            childImageSharp {
                gatsbyImageData(width: 1140)
            }
        }
    }
`;

export default About;

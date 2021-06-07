import { graphql } from 'gatsby';
import React from 'react';
import CommisionsBanner from '../components/CommissionsBanner/CommisionsBanner';
import PageIntro from '../components/PageIntro/PageIntro';
import Seo from '../components/Seo';

const Drawing = ({ data }) => {
    const {
        file: {
            name,
            childImageSharp: { gatsbyImageData: img },
        },
    } = data;

    return (
        <>
            <Seo title="Drawing" />
            <PageIntro
                img={img}
                alt=""
                title="A very Interesting Artwork"
                subtitle="An ode to Modern Art"
                paragraphs={[
                    'Lorem id ex ipsum id occaecat sit nisi Lorem sit occaecat veniam occaecat. Sit quis aliqua aliqua esse aliqua cupidatat reprehenderit dolore mollit anim consequat aute. Velit nostrud ea commodo commodo Lorem esse aute duis. Non esse laborum cupidatat aliquip excepteur pariatur enim dolore aliqua. Duis nulla fugiat magna incididunt ipsum eiusmod occaecat enim occaecat nisi minim aliqua ipsum magna. In aliqua cupidatat aliquip dolor consequat Lorem non aliqua non labore laborum.',
                    'Velit ipsum id cupidatat in ipsum nostrud aute ullamco aliquip tempor excepteur aute in amet.',
                ]}
            />
            <CommisionsBanner />
        </>
    );
};

export const query = graphql`
    query ($title: String!) {
        file(name: { eq: $title }) {
            name
            childImageSharp {
                gatsbyImageData(width: 1140)
            }
        }
    }
`;

export default Drawing;

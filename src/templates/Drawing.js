import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import CommisionsBanner from '../components/CommissionsBanner/CommisionsBanner';

const Drawing = ({ data }) => {
    const {
        file: {
            name,
            childImageSharp: { gatsbyImageData: img },
        },
    } = data;

    return (
        <>
            <section className="container pt-4 md:pt-8 pb-4 md:pb-12">
                <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-16">
                    <div className="w-full md:w-1/2">
                        <GatsbyImage image={img} alt="" className="w-full shadow" />
                    </div>
                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                        <h1 className="text-2xl md:text-3xl font-extrabold">
                            A very Interesting Art
                        </h1>
                        <h2 className="text-2xl text-primary-accent font-semibold">
                            An ode to Modern art
                        </h2>
                        <div className="flex flex-col space-y-4 py-2 md:py-4 opacity-70">
                            <p>
                                Lorem id ex ipsum id occaecat sit nisi Lorem sit occaecat veniam
                                occaecat. Sit quis aliqua aliqua esse aliqua cupidatat reprehenderit
                                dolore mollit anim consequat aute. Velit nostrud ea commodo commodo
                                Lorem esse aute duis. Non esse laborum cupidatat aliquip excepteur
                                pariatur enim dolore aliqua. Duis nulla fugiat magna incididunt
                                ipsum eiusmod occaecat enim occaecat nisi minim aliqua ipsum magna.
                                In aliqua cupidatat aliquip dolor consequat Lorem non aliqua non
                                labore laborum.
                            </p>
                            <p>
                                Velit ipsum id cupidatat in ipsum nostrud aute ullamco aliquip
                                tempor excepteur aute in amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
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

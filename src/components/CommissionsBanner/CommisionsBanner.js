import { Link, useStaticQuery, graphql } from 'gatsby';
import React from 'react';

const CommisionsBanner = () => {
    const { datoCmsCommissionsBanner } = useStaticQuery(graphql`
        query {
            datoCmsCommissionsBanner {
                title
                smallDescription
                callToAction
            }
        }
    `);
    return (
        <section className="container">
            <div className="bg-primary-accent rounded-lg py-8 px-6 md:px-12 flex flex-col md:flex-row text-primary text-center lg:text-left space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full md:w-7/12">
                    <h2 className="text-4xl md:text-4xl font-black mb-2">
                        {datoCmsCommissionsBanner.title}
                    </h2>
                    <p className="text-lg">{datoCmsCommissionsBanner.smallDescription}</p>
                </div>
                <div className="flex items-center justify-center md:justify-end w-full md:w-5/12">
                    <Link
                        to="/commisions"
                        className="bg-primary text-primary-accent px-6 py-4 rounded-lg text-base md:text-lg shadow-md ring-primary ring-opacity-50"
                    >
                        {datoCmsCommissionsBanner.callToAction}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CommisionsBanner;

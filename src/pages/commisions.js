import React from 'react';
import Hero from '../components/Hero/Hero';
import CommissionsTiers from '../components/CommissionsPrice/CommissionsTiers';
import ContactForm from '../components/ContactForm/ContactForm';
import Seo from '../components/Seo';
import { graphql } from 'gatsby';

const CommisionsPage = ({ data: { datoCmsCommissionsPage: pageData } }) => {
    return (
        <>
            <Seo title="Commissions" />
            <Hero topText={pageData.title} bottomText={pageData.subtitle} />
            <CommissionsTiers data={pageData.commissionsTiers} />
            <ContactForm
                title={pageData.formTitle}
                subtitle={pageData.formSubtitle}
                submittedTitle={pageData.submittedTitle}
                submittedMessage={pageData.submittedDescription}
            />
        </>
    );
};

export const query = graphql`
    query {
        datoCmsCommissionsPage {
            title
            subtitle
            formTitle
            formSubtitle
            submittedTitle
            submittedDescription
            commissionsTiers {
                title
                startPrice: startingPrice
                description: basicDescription
                image {
                    gatsbyImageData(width: 400)
                }
                whatYouGet {
                    description
                }
            }
        }
    }
`;

export default CommisionsPage;

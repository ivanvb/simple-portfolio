import React from 'react';
import Hero from '../components/Hero/Hero';
import CommissionsTiers from '../components/CommissionsPrice/CommissionsTiers';
import ContactForm from '../components/ContactForm/ContactForm';

const CommisionsPage = () => {
    return (
        <>
            <Hero topText="Commissions" bottomText="Drawings according to your needs." />
            <CommissionsTiers />
            <ContactForm />
        </>
    );
};

export default CommisionsPage;

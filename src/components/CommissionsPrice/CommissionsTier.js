import React from 'react';

const CommissionsTier = ({ title, startPrice, description, perks }) => {
    return (
        <div className="bg-primary text-center px-4 py-8 rounded-lg shadow-md max-w-[350px] mx-auto">
            <h2 className="font-bold text-2xl mb-2">{title}</h2>
            <div className="h-24 w-24 bg-primary-accent my-2 rounded-full mx-auto"></div>
            <p className="text-lg mb-4">
                Starting from <span className="text-primary-accent">{startPrice}$</span>
            </p>
            <p className="leading-7 mb-6">{description}</p>
            <div>
                <span className="text-primary-accent font-bold block mb-2">What you get:</span>
                <ul className="text-left list-disc pl-8 space-y-2">
                    {perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommissionsTier;

import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const CommissionsTier = ({ title, startPrice, description, whatYouGet, image }) => {
    return (
        <div className="bg-primary text-center px-4 py-8 rounded-lg shadow-md max-w-[350px] mx-auto">
            <h2 className="tracking-wide font-semibold text-2xl mb-2">{title}</h2>
            <div className="h-24 w-24 bg-primary-accent mt-2 mb-3 rounded-full mx-auto">
                <GatsbyImage
                    image={image.gatsbyImageData}
                    alt=""
                    className="h-full w-full rounded-full transform scale-95 border-4 border-primary"
                />
            </div>
            <p className="text-lg mb-4">
                Starting from <span className="text-primary-accent">{startPrice}$</span>
            </p>
            <p className="leading-7 mb-10">{description}</p>
            <div>
                <span className="text-primary-accent font-bold block mb-3 text-xl">
                    What you get:
                </span>
                <ul className="text-left list-disc pl-8 space-y-3">
                    {whatYouGet.map((perk, i) => (
                        <li key={i}>{perk.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommissionsTier;

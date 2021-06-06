import { Link } from 'gatsby';
import React from 'react';

const CommisionsBanner = () => {
    return (
        <section>
            <div className="container bg-primary-accent rounded-lg py-8 px-12 flex text-primary">
                <div className="w-7/12">
                    <h2 className="text-4xl font-black mb-2">Want a custom drawing?</h2>
                    <p className="text-lg">
                        I am accepting commissions for full backgrounds, character style drawings
                        and game assets.
                    </p>
                </div>
                <div className="flex items-center justify-end w-5/12">
                    <Link
                        to="/commisions"
                        className="bg-white text-primary-accent px-6 py-4 rounded-lg text-lg shadow-md"
                    >
                        Check out my commisions page!
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CommisionsBanner;

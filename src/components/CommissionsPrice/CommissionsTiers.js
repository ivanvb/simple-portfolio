import React from 'react';
import CommissionsTier from './CommissionsTier';

const CommissionsTiers = () => {
    const data = [
        {
            title: 'Background/Banner',
            startPrice: 100,
            description:
                "Get a background for your Desktop, Phone, Twitch or Youtube Channel or any other purpose you'd like to give it.",
            perks: [
                'Your background image in the aspect ration of your choice in 4k resolution',
                'Up to 2 revisions',
                '14 days delivery',
            ],
        },
        {
            title: 'Background/Banner',
            startPrice: 100,
            description:
                "Get a background for your Desktop, Phone, Twitch or Youtube Channel or any other purpose you'd like to give it.",
            perks: [
                'Your background image in the aspect ration of your choice in 4k resolution',
                'Up to 2 revisions',
                '14 days delivery',
            ],
        },
        {
            title: 'Background/Banner',
            startPrice: 100,
            description:
                "Get a background for your Desktop, Phone, Twitch or Youtube Channel or any other purpose you'd like to give it.",
            perks: [
                'Your background image in the aspect ration of your choice in 4k resolution',
                'Up to 2 revisions',
                '14 days delivery',
            ],
        },
    ];
    return (
        <section className="bg-primary-muted">
            <div className="grid grid-cols-1 lg:grid-cols-3 container gap-12 py-8">
                {data.map((item, i) => (
                    <CommissionsTier key={i} {...item} />
                ))}
            </div>
        </section>
    );
};

export default CommissionsTiers;

import React from 'react';
import CommissionsTier from './CommissionsTier';

const CommissionsTiers = ({ data }) => {
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

import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
    return (
        <section className="container mt-8 md:mt-32 text-center">
            <h1 className="text-2xl">Oops! Page not found</h1>
            <h2 className="font-black text-primary-accent text-7xl leading-22 md:text-[120px] md:leading-[140px] ">
                404
            </h2>
            <Link className="underline mt-4 md:mt-4" to="/">
                Go back to home
            </Link>
        </section>
    );
};

export default NotFoundPage;

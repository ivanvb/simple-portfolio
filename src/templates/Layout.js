import React from 'react';
import Header from '../components/Header/index';
import Footer from '../components/Footer/Footer';
import '../styles/tailwind/build.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;

import React from 'react';
import Header from '../components/Header/index';
import '../styles/tailwind/build.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-1 flex-col">{children}</main>
        </>
    );
};

export default Layout;

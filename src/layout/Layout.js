import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <>

            {/* COMMON NAVBAR */}
            <Navbar />

            {/* PAGE CONTENT */}
            <Outlet />

            {/* COMMON FOOTER */}
            <Footer />

        </>
    )
}

export default Layout;
import React from "react";
import "./Layout.css";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
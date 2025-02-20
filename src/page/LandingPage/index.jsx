import React from "react";
import Footer from "../../components/Footer";
import Archive from "../../components/Archive";
import About from "../../components/About";
import Services from "../../components/Services";

const LandingPage = () => {
    return (
        <div>
           <About />
            <Services />
            <Archive />
            <Footer />
        </div>
    );
}

export default LandingPage;
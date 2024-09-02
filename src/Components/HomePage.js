import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Cards from './Cards.js';
import About from './About.js';
import Testmonials from './Testmonials';
import React from 'react';
const HomePage = () => {
    return(
    <>
        <Header />
        <Main />
        <Cards />
        <Testmonials />
        <About />
        <Footer />
    </>

    );
}

export default HomePage;
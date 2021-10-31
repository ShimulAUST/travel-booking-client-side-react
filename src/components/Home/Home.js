import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import OurPartners from '../OurPartners/OurPartners';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurPartners></OurPartners>
            <Contact></Contact>

        </div>
    );
};

export default Home;
import React from 'react';
import Footer from '../../share/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Exceptional from './Exceptional';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import Gnb from '../components/Gnb';
import Top from '../components/Top';
import Container from '../components/Container';
import Event from '../components/Event';
import BrMenu from '../components/BrMenu';
import Delivery from '../components/Delivery';
import Sns from '../components/Sns';
import Footer from '../components/Footer';
const main = () => {
    
    return (
        <div>
            <Top />
            <Gnb />
            <Container />
            <Event />
            <BrMenu />
            <Delivery />
            <Sns />
            <Footer />
        </div>
    );
};

export default main;
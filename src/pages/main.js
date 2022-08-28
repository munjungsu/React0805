import React from 'react';
import Gnb from '../components/Gnb';
import Top from '../components/Top';
import Container from '../components/Container';
import Event from '../components/Event';
import BrMenu from '../components/BrMenu';
const main = () => {
    
    return (
        <div>
            <Top />
            <Gnb />
            <Container />
            <Event />
            <BrMenu />
        </div>
    );
};

export default main;
import React from 'react';
import Experts from './Experts';
import Services from './Services';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Services></Services>
            <Experts/>
           
        </div>
    );
};

export default Home;
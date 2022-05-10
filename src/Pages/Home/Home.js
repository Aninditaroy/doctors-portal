import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <Banner2/>
        </div>
    );
};

export default Home;
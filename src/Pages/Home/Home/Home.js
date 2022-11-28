import React from 'react';
import Banner from '../Banner/Banner';
import SellUpWorkProcess from '../SellUpWorkProcess/SellUpWorkProcess';
import Categories from './Categories/Categories';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <SellUpWorkProcess></SellUpWorkProcess>
        </div>
    );
};

export default Home;
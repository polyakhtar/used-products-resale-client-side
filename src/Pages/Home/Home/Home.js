import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import SellUpWorkProcess from '../SellUpWorkProcess/SellUpWorkProcess';
import Categories from './Categories/Categories';
import Review from './Review/Review';
import Team from '../Team/Team';
import Feature from '../Feature/Feature';
import FAQ from './FAQ/FAQ';
import Portfolio from './Portfolio/Portfolio';
import Discount from '../Discount/Discount';
const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Categories></Categories>
            <Discount></Discount>
            <Contact></Contact>
            <Team></Team>
            <Review></Review>
            <Feature></Feature>
            <FAQ></FAQ>
            <Portfolio></Portfolio>
            <SellUpWorkProcess></SellUpWorkProcess>
        </div>
    );
};

export default Home;
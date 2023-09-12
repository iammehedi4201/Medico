import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Category from '../Category/Category';
import Members from '../Members/Members';
import Tests from '../Tests/Tests';
import Appointment from '../Appointment/Appointment';
import Reviews from '../Reviews/Reviews';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div className='space-y-24'>
            <Banner></Banner>
            <ChooseUs></ChooseUs>
            <Category></Category>
            <Members></Members>
            <Tests></Tests>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
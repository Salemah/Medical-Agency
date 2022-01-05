import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Diagonsticbanner from '../Diagonstic/Diagonsticbanner';
import diagonsticbanner from '../Diagonstic/Diagonsticbanner';


import Hospitaldepartment from '../HospitalDepartments/Hospitaldepartment';
import Review from '../Review/Review';
import Services from '../services/services';
import Specialist from '../Specialist/Specialist';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Specialist></Specialist>
            <Hospitaldepartment></Hospitaldepartment>
            <Review></Review>
            <Diagonsticbanner></Diagonsticbanner>
           
        </div>
    );
};

export default Home;
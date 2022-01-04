import React from 'react';
import Header from '../../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors.js';
import Featuresbanner from '../FeatureBanner/featuresbanner';
import Hospitaldepartment from '../HospitalDepartments/Hospitaldepartment';
import Services from '../services/services';
import Specialist from '../Specialist/Specialist';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Specialist></Specialist>
            <Hospitaldepartment></Hospitaldepartment>
            <Featuresbanner></Featuresbanner>
        </div>
    );
};

export default Home;
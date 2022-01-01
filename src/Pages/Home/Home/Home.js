import React from 'react';
import Header from '../../../Shared/Header/Header';
import Doctors from '../Doctors/Doctors.js';
import Services from '../services/services';
import Specialist from '../Specialist/Specialist';

const Home = () => {
    return (
        <div>
   
            <Services></Services>
            <Specialist></Specialist>
        </div>
    );
};

export default Home;
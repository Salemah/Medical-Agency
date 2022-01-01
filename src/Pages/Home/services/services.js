import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import ecg  from '../../../images/ecg.png';

const Services = () => {
    const [services,setServces] =  useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServces(data))
    },[])

    
    return (
        <div id="services" className="container">
            <h1>Featured Clinical Services For Patients</h1>
            <h3>Our medical specialists care about you and your family’s health</h3>
            <img id="ecg-image" src={ecg} alt=""/>
            <div class="center mt-7 p-2">
                {
                    services.map(service=><Service key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;
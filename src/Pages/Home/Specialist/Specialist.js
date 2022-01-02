import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors.js';
import ecg  from '../../../images/ecg.png';
import './specialis.css';


const Specialist = () => {
    const [doctor,setDoctor] = useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data =>setDoctor(data))
    },[])
    return (
        <Container id="doctor" >
           <div class="doctor-header">
               <hr/>
           <h1 className=" mt-5 mb-3 text-center ">Meet Our Team Of Experienced Doctors</h1>
            <h3 className="mb-5 ">Our medical specialists care about you and your family’s health</h3>
            <img id="ecgimage" src={ecg} alt=""/>
            <hr/>
           </div>
            <Row className='text-center '>
                {
                    doctor.map( doctor =><Doctors
                    key={doctor.id}
                    doctors ={doctor}></Doctors>)
                }
            </Row>
        </Container>
    );
};

export default Specialist;
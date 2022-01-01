import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctors from '../Doctors/Doctors.js';

// const doctor = [{
//     id:"d1",
//     img:"https://i.ibb.co/jGHX1t2/8.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/X8ncVz7/6.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/n74xMxn/7.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/Zgx0q1b/5.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/5YQTQRc/3-1.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/mG2mtBQ/2-1.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/7NZ7pVk/4.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },{
//     id:"d1",
//     img:"https://i.ibb.co/px9dQF4/1-1.jpg",
//     name:"Dr. Alex Furgosen",
//     department:"CANCER SPECIALIST",

// },]

const Specialist = () => {
    const [doctor,setDoctor] = useState([]);
    useEffect(()=>{
        fetch('doctors.json')
        .then(res => res.json())
        .then(data =>setDoctor(data))
    },[])
    return (
        <Container id="experts" >
            <h1 className=" mt-5 mb-3 text-center ">Meet Our Team Of Experienced Doctors</h1>
            <h3 className="mb-5 ">Our medical specialists care about you and your family’s health</h3>
            <Row className='text-center'>
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
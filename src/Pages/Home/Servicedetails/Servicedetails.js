import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Servicedetails.css';

const Servicedetails = () => {
    const [details,setDetails] = useState({});
    const {id} = useParams();
    const url =`/services.json`;
    useEffect(()=>{
        fetch(url)
        .then(res =>res.json())
        .then(data => {
            const exist = data.find(pd=>pd.id == id );
            setDetails(exist);
        })
    },[]);
    return (
        <div className="single-service">
            <div class="service-details">
                <div class="left-details">
                     <h4>OUR</h4>
                    <h1>Specialized Team</h1>
                    <hr/>
                    <p><q>We are a team of Doctor, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.</q></p>
                    <hr/> 
             
                </div>
                <div class="left-details">
                <Container fluid="md">
  <Row>
      <img src={details.img} alt=""/>
    <h3>Name: {details.name}</h3>
                    <h2>Service Id : {id}</h2>
  </Row>
</Container>
                    
                </div>

            </div>
           
            
        </div>
    );
};

export default Servicedetails;
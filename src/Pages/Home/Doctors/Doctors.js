import React from 'react';
import { Col } from 'react-bootstrap';

const Doctors = (props) => {
  const{ img,id,name,department} = props.doctors;
    return (
        
        <Col  xs={12} md={6} lg={4}  >

            <img src={img} alt=""/>
            <h3>{name}</h3>
            <p className="text-danger">{department}</p>
        </Col>
    );
};

export default Doctors;
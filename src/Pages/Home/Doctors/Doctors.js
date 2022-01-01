import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Doctors.css';
const Doctors = (props) => {
  const{ img,id,name,department} = props.doctors;
  const history = useHistory();
  const appoinMent = (did)=>{
    history.push(`/doctorapointmnt/${did}`);
  }
    return (
        
        <Col  xs={12} md={6} lg={4} className="collum"  >
            <img src={img} alt=""/>
            <div class="doctorlist-bottom">
            <h3>{name}</h3>
            <p className="text-danger">{department}</p>
            <button className="button-dd " onClick={()=>appoinMent(id)} >Book an AppointMent </button>
            </div>
       
        </Col>
    );
};

export default Doctors;
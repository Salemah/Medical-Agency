import React from 'react';
import { useHistory } from 'react-router-dom';
import './Servicecs.css';

const Service = (props) => {
    const {name,id,img,details,price}= props.service;
    const history = useHistory();
    const handleReadmore=(id)=>{
        history.push(`/servicedetails/${id}`);

    }
    return (
        <div className="cell pb-4 ">
        <img src={img} /><br/>
    
         <h3>Name: {name}</h3>
         
         {/* <h5>Price : {price}</h5> */}
        
         <p>{details.slice(0, 100)}</p>
         <button className="button " onClick={()=>handleReadmore(id)} >Read More {name.toLowerCase()}</button>

     </div>
    );
};

export default Service;
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
            <div class="cell-bottom">
            <h3>{name}</h3>
            <p>{details.slice(0, 100)}</p>
            <button className="button " onClick={()=>handleReadmore(id)} >Read More {name.toLowerCase()}</button>
                </div>
            </div>
    );
};

export default Service;
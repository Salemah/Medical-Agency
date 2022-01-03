import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Servicedetails = () => {
    const [details,setDetails] = useState([]);
    const {id,img} = useParams();
 
    
    
    return (
        <div>
           
            <h1>This is {id}</h1>
            <img src={img} alt=""/>
        </div>
    );
};

export default Servicedetails;
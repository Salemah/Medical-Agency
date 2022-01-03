import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Servicedetails = () => {
    const [details,setDetails] = useState([]);
 
    const {id} = useParams();
    useEffect(()=>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setDetails(data))
    },[]);
    
    
    return (
        <div>
           
            <h1>This is {id}</h1>
        </div>
    );
};

export default Servicedetails;
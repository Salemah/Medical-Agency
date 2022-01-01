import React from 'react';
import { useParams } from 'react-router-dom';

const Servicedetails = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>This is {id}</h1>
        </div>
    );
};

export default Servicedetails;
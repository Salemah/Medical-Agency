import React from 'react';
import { useParams } from 'react-router-dom';

const Doctorapoinemnt = () => {
    const {did} = useParams();
    return (
        <div>
            <h1>This is doctor: {did} </h1>
        </div>
    );
};

export default Doctorapoinemnt;
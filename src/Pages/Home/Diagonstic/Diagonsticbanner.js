import React from 'react';
import { Link } from 'react-router-dom';
import './diagonsticbanner.css';

const Diagonsticbanner = () => {
    return (
        <div class="container diagonsticbanner">
  <div class="row">
    <div class="col-sm-6">
    <h1>View Our All Diagonstic Test</h1>
    <p>Your doctor may order different medical tests to help find out what your heart condition is and the best way to treat it. Some of these tests are explained below.</p>
    </div>
    <div class="col-sm-6 " id='viewbutton-box'>
       
       <Link to='/diagonsticdetails' id='view-button'>View Details</Link>
    </div>
  </div>
  
</div>
    );
};

export default Diagonsticbanner;
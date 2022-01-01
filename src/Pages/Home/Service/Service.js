import React from 'react';

const Service = (props) => {
    const {name,id,img,details,price}= props.service;
    return (
        <div className="cell pb-4">
        <img src={img} /><br/>
    
         <h3>Name: {name}</h3>
         
         <h5>Price : {price}</h5>
        
         {/* <p>description : {details.max(20)}</p> */}
         {/* <Link to={`/book/${id}`}>
         <button className="btn-warning" >Book {name.toLowerCase()}</button></Link> */}
         <button className="btn-warning" >Book {name.toLowerCase()}</button>

     </div>
    );
};

export default Service;
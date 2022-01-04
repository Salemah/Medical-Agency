import React from 'react';
import { useHistory } from 'react-router-dom';
import './Servicecs.css';

const Service = (props) => {
    const { name, id, img, details, price } = props.service;
    const history = useHistory();
    const handleReadmore = (id) => {



        history.push(`/servicedetails/${id}`);

    }
    return (
        <div class="">

            {/* <div className="cell pb-4 " >

                <img src={img} /><br />

                <div class="cell-bottom">
                    <h3>{name}</h3>
                    <p>{details.slice(0, 100)}</p>
                    <button className="button " onClick={() => handleReadmore(id)} >Read More {name.toLowerCase()}</button>
                </div>
            </div> */}
            <div class="card text-center service-card" style={{width: ""}}>
                <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{details.slice(0, 100)}</p>
                        <button className="button " onClick={() => handleReadmore(id)} >Read More {name.toLowerCase()}</button>
                    </div>
            </div>

        </div>




        // /







    );
};

export default Service;
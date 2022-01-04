import React from 'react';
import './Review.css';
import about from '../../../images/about-1.jpg';

const Review = () => {
    return (
        <div class="review">
            <div class="left">
                <img src={about} alt=""/>
            </div>
            <div class="right">
                
                <h2>Our Clients Are Our Priority, We Offer Quality Dental Services</h2>
                <p>Our aim is to give every patient the prospect of a better quality of life. To do so, our reinvestment model ensures we maintain a high standard of quality and are able to be innovative </p>
                
                <span className="features"><i class="fas fa-check"></i>HealthCare Professionals</span><br/>
                <span className="features"><i class="fas fa-check"></i>Medical Excellence</span><br/>
                <span className="features"><i class="fas fa-check"></i>Latest Technologies</span><br/>
               
            </div>
        </div>
    );
};

export default Review;
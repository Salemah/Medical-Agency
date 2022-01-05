import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div  >
            <Carousel  style={{width:"85%",marginLeft:"auto",marginRight:"auto"}}>
        <Carousel.Item>
          <img style={{height:"500px",borderRadius:"6px"}}
            className="d-block w-100"
            src="https://i.ibb.co/9vbFyvL/1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Diagnose and Research</h3>
            <p>Diagnosis is central to medical practice. It refers to knowing (“gnosis”) about the health of a clie</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"500px",borderRadius:"6px"}}
            className="d-block w-100"
            src="https://i.ibb.co/XCfSfX3/2.png"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Dental Surgery</h3>
            <p>Diagnosis is central to medical practice. It refers to knowing (“gnosis”) about the health of a clie</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:"500px",borderRadius:"6px"}}
            className="d-block w-100"
            src="https://i.ibb.co/HNpm50H/5.png"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Drug / Medicine</h3>
            <p>diagnostic research.” Modern methods of diagnostic research</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Banner;
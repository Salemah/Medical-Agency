import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Servicedetailss.css';

const Servicedetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    const url = `/services.json`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                const exist = data.find(pd => pd.id == id);
                setDetails(exist);
            })
    }, []);
    return (
        <div className="single-service">
            
                <Container>
                    <Row>
                        <Col class="col-sm "><h4>OUR</h4>
                            <h1>Specialized Team</h1>
                            <hr />
                            <p id="pessage"><q>We are a team of Doctor, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.</q></p>
                            <hr /> </Col>
                        <Col class="col-sm">
                            <img  src={details.img} alt=""/>
                            <h2>{details.name}</h2>
                           </Col>
                        <Col class="col-sm">
                            <p  id="description">{details.details}</p>
                            </Col>

                    </Row>

                </Container>
                </div>
               
    );
};

export default Servicedetails;
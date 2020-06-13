import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./Hero.css";


function Hero(props) {
    return(
        <Jumbotron className="junmbotron-fluid p-0">
            <Container className= "one"  fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={6}>
                    {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
                    {props.subTitle && <h3 className="display-3 front-weight-light">{props.subTitle}</h3>}
                    {props.text && <h3 className="lend frount-weight-light">{props.text}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
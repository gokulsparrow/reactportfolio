import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Content(props) {
    return(
        <div>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col md={8}>
                        {props.children}     
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Content;
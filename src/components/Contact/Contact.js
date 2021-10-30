import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contact from '../../images/contact.jpg';
const Contact = () => {
    return (
        <div>
            <Container className="mt-5" id="contact">
                <h2>Contact Us</h2>
                <p>
                    Please send your message below. We will get back to you at the earliest!
                </p>
                <Row>
                    <Col xs={12} md={6}>
                        <img width="70%;" className="img-fluid" src={contact} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <form method="" id="">

                            <Row>

                                <Col className="form-group">
                                    <textarea class="form-control" type="textarea" id="message" name="message" placeholder="Enter your message here..." maxlength="6000" rows="7"></textarea>
                                </Col>

                            </Row>

                            <Row>
                                <Col className="form-group mt-3">

                                    <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" required />
                                </Col>
                                <Col className="form-group mt-3">


                                    <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required />
                                </Col>
                            </Row>
                            <Row>

                                <Col className="form-group">
                                    <button type="submit" className="btn form-control btn-lg btn-success mt-5" >Send →</button>
                                </Col>

                            </Row>


                        </form>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Contact;
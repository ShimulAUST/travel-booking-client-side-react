import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../images/partners/1.png';
import img2 from '../../images/partners/2.png';
import img3 from '../../images/partners/3.png';
const OurPartners = () => {
    return (
        <div id="partners" className="container mt-5">
            <h2>Our Partners</h2>
            <div className="row">
                <div className="col-md-4 g-5">
                    <CardGroup className="h-100">
                        <Card>
                            <Card.Img variant="top" src={img1} height="250px" />
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-4 g-5">
                    <CardGroup className="h-100">
                        <Card>
                            <Card.Img variant="top" src={img2} height="250px" />
                        </Card>
                    </CardGroup>
                </div>
                <div className="col-md-4 g-5">
                    <CardGroup className="h-100">
                        <Card>
                            <Card.Img variant="top" src={img3} height="250px" />
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </div>
    );
};

export default OurPartners;
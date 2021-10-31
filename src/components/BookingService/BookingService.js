import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './BookingService.css';
const BookingService = () => {

    const { _id } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        const uri = `https://blooming-sands-68806.herokuapp.com/services/${_id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setService(data));
    }, [_id]);

    const onSubmit = data => {
        axios.post('https://blooming-sands-68806.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Ordered Successfully");
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    {service ?
                        <Container >
                            <CardGroup className="h-100">
                                <Card>
                                    <Card.Img variant="top" src={service.image} height="250px" />
                                    <Card.Body style={{ textAlign: 'center' }}>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>
                                            {service.description}
                                            <h3>৳ {service.price}</h3>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>


                            </CardGroup>
                        </Container> : <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    }
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="book-service">
                        <h2>Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("serviceId", { required: true, maxLength: 30 })} value={service._id} hidden />
                            <input {...register("name", { required: true, maxLength: 30 })} value={user.displayName} />
                            <input {...register("email", { required: true, maxLength: 30 })} value={user.email} />
                            <input {...register("status", { required: true, maxLength: 30 })} value="pending" readOnly />
                            <input {...register("phone", { required: true, maxLength: 30 })} placeholder="Enter your phone number" />
                            <textarea {...register("address")} placeholder="Enter your address" />
                            <input className="btn btn-success btn-block form-control" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingService;
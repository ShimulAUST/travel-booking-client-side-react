import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ManageBookings from '../ManageBookings/ManageBookings';


const AllBookings = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-sands-68806.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order.serviceId}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
                            <td><button>Delete</button></td>

                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllBookings;
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
    let count = 1;
    const handleDelete = id => {
        const url = `https://blooming-sands-68806.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert("successfully Deleted");
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }

            })
    }
    return (
        <div className="mt-2">
            <h3>All Orders</h3>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Serial No</th>
                        <th>Order Id</th>
                        <th>Sevice Id</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Customer Phone</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        orders.map(order => <tr key={order._id}>
                            <td>{count++}</td>
                            <td>{order._id}</td>
                            <td>{order.serviceId}</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.phone}</td>
                            <td>{order.address}</td>
                            <td>{order.status}</td>
                            <td> <button className="btn btn-info btn-block form-control">Update</button><br />
                                <button className="btn btn-danger btn-block form-control mt-2" onClick={() => handleDelete(order._id)}>Delete</button>

                            </td>

                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default AllBookings;
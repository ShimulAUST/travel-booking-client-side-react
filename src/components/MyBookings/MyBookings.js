import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://blooming-sands-68806.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data.filter(dd => dd.email === user.email)));
    }, [orders, user]);
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
    const handleUpdateOrders = id => {
        const url = `https://blooming-sands-68806.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    const remaining = orders;
                    setOrders(remaining);
                }
                console.log(data);
            })
    };

    return (
        <div className="mt-2">
            <h3>All Orders</h3>

            {orders.length > 0 ?
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
                                <td> <button className="btn btn-info btn-block form-control" onClick={() => handleUpdateOrders(order._id)}>Update</button><br />
                                    <button className="btn btn-danger btn-block form-control mt-2" onClick={() => handleDelete(order._id)}>Delete</button>

                                </td>

                            </tr>)
                        }
                    </tbody>


                </Table>
                : <div>
                    <h2>No Data Found</h2>
                </div>}
        </div>
    );
};

export default MyBookings;
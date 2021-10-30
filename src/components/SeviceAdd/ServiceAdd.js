import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './ServiceAdd.css';
const ServiceAdd = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://blooming-sands-68806.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Added Successfully");
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <div className="add-service">
            <h2>Add New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default ServiceAdd;
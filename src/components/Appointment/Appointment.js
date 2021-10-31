import React from 'react';
import { useForm } from 'react-hook-form';
import './Appointment.css';
const Appointment = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div className="appointment-service">
            <h2>Add New Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" className="form-control" />
                <input type="date" {...register("date")} className="form-control" />
                <textarea {...register("price")} placeholder="Enter Address" className="form-control" />
                <input className="btn btn-success btn-block form control" type="submit" />
            </form>
        </div>
    );
};

export default Appointment;
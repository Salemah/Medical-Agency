import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import './doctorappointment.css';

const Doctorapoinemnt = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = UseAuth();

    const onSubmit = data => {
        console.log(data)
    };
    const { did } = useParams();
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <label>Doctor Id</label><br />
                <input defaultValue={did} {...register("id", { required: true })} /><br />
                {errors.email && <span className="error">This field is required</span>}
                <label>Patient Name</label><br />
                <input defaultValue={user.displayName} {...register("name")} /> <br />
                <label>Patient Email</label><br />
                <input defaultValue={user.email} {...register("email", { required: true })} /><br />
                {errors.email && <span className="error">This field is required</span>}
                <label>Date</label><br/>
                <input  />
                {errors.email && <span className="error">This field is required</span>}
                <br />

                    <button id="btn-apt" >submit</button>
              
            </form>
        </div>
    );
};

export default Doctorapoinemnt;
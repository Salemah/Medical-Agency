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

        <div >
            <h1>Features That You Will Love Us and Enjoy Specialized Care</h1>

            <div class="container appointmnet-top">
                <div class="row">
                    <div class="col-sm m-2 appointmnet-top-col">
                        <h4><i class="fas fa-hospital-user"></i> Patient Care</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum delectus harum non laudantium exercitationem odio expedita inventore quidem sunt.</p>
                    </div>
                    <div class="col-sm appointmnet-top-col m-2">
                    <h4><i class="far fa-gem"></i> Experience</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum delectus harum non laudantium exercitationem odio expedita inventore quidem sunt.</p>
                    </div>
                    <div class="col-sm appointmnet-top-col m-2">
                    <h4><i class="fas fa-user-md "></i> Certified DOctor</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum delectus harum non laudantium exercitationem odio expedita inventore quidem sunt.</p>
                    </div>
                    <div class="col-sm appointmnet-top-col m-2">
                    <h4><i class="fas fa-hand-holding-medical"></i> Quality Treatment</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum delectus harum non laudantium exercitationem odio expedita inventore quidem sunt.</p>
                    </div>
                </div>
            </div>
            <div className="appointment-page">
                <div class="left-site ms-5">
                    <h1>Make An Appointment</h1>
                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                        <label>Doctor Id</label><br />
                        <input defaultValue={did} {...register("id", { required: true })} /><br />
                        {errors.email && <span className="error">This field is required</span>}
                        <label>Patient Name</label><br />
                        <input defaultValue={user.displayName} {...register("name")} /> <br />
                        <label>Patient Email</label><br />
                        <input defaultValue={user.email} {...register("email", { required: true })} /><br />
                        {errors.email && <span className="error">This field is required</span>}
                        <label >Date</label><br />
                        <input  type="date" {...register("date", { required: true })}/><br />

                        {errors.date && <span className="error">This field is required</span>}
                        <br />

                        <button id="btn-apt" >Book Appointment</button>

                    </form>
                </div>
                <div class="right-site">

                </div>
            </div>
        </div>
    );
};

export default Doctorapoinemnt;
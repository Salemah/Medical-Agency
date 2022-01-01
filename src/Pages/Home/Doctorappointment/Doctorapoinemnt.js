import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';

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

                <input defaultValue={user.displayName} {...register("name")} /> <br/>

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                
               

                <input type="submit" />
            </form>
        </div>
    );
};

export default Doctorapoinemnt;
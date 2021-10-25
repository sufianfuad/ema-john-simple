import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth()
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Your Address" defaultValue="" {...register("address")} />
                <input placeholder="Your phone number" defaultValue="" {...register("phone")} />
                <input placeholder="Your City" defaultValue="" {...register("city")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;
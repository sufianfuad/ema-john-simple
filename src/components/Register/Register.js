import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="text-center mt-3 shadow w-50 mx-auto rounded-3">
            <div>
                <h2>Register: Create New Account</h2>

                <form onSubmit="" className="m-3 p-3 form mx-auto" >
                    <input className="p-2 border border rounded-2" type="text" placeholder="Your Name" />
                    <br />
                    <br />
                    <input className="p-2 border border rounded-2" type="email" name="Email" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input className="p-2 border border rounded-2" type="password" name="Password" placeholder="your password" />
                    <br />
                    <br />
                    <input className="p-2 border border rounded-2" type="password" name="Password" placeholder="Continue password" />
                    <br />
                    <br />
                    <input className="" type="submit" value="Submit" />
                </form>
                <p className="pb-3">Already Registered? <Link to="/login">Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;
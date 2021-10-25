import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo.png';

const Login = () => {
    const { signInUsingGoogle } = useAuth();

    const location = useLocation();

    const history = useHistory();

    // user direct jodi ashe tahole take shop a niye jabe log in koriye
    const redirect_uri = location.state?.form || '/shop'

    //handle 
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    return (
        <div className="text-center mt-3 shadow w-50 mx-auto rounded-3">
            <div>
                <img className="logo mb-3" src={logo} alt="" />

                <h2 className="pb-3">Sign In</h2>
                <form>
                    <input className="p-2 border border rounded-2" type="email" name="Email" id="" placeholder="Your Email" />
                    <br />
                    <br />
                    <input className="p-2 border border rounded-2" type="password" name="Password" placeholder="your password" />
                    <br />
                    <br />
                    <input className="" type="submit" value="Submit" />
                </form>
                <p className="pt-2">New in Ema-John? <Link to="/register">Create Account</Link>
                </p>
                <div>===Continue With===</div>
                <button
                    onClick={handleGoogleLogin}
                    className="cart-btn mb-3"
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import '../assets/Login.css'
import Applogo from './Applogo.png'

function Login() {
    return (
        <div className="login-page">
            <div className="form">
                <div className="login">
                    <div className="login-header">
                        <img className="appLogo" src={Applogo} alt="appLogo" srcset="" />
                        <h3>Welcome back to Meme Generator!</h3>
                    </div>
                </div>
                <form className="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>login</button>
                    <p className="message">Not registered? <a href="/register">Create an account</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
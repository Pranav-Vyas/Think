import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div className="login-wrapper">
            <div className="loginContainer">
                <h1>Login</h1>
                <form className="login-form" action="">
                    <input autoComplete="off" required className="login-input" type="text" name="username" placeholder="Username" />
                    <input autoComplete="off" required className="login-input" type="password" name="password" placeholder="Password" />
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login

import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:"",
        password:""
    });
    let name,value;

    const handleOnChange = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]:value});
    }

    const postData = async (e) => {
        e.preventDefault();
        const {username, password} = user;
        const res = await fetch("http://localhost:5000/login", {
            mode: 'cors',  // this cannot be 'no-cors'
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    "username": username,
                    "password": password
                }
            )
        });
        const data = await res.json();
        console.log("in login data is ");
        if (res.status > 200 || !data) {
            alert("Login failed");
            navigate('/login')
        } else {
            console.log(data.token);
            localStorage.setItem('token', data.token);
            // console.log("string length ",JSON.stringify(data.user).length);
            localStorage.setItem('LoginId', data.user._id);
            console.log("login successful");
            navigate('/admin')
        }

    } 

    return (
        <div className="login-wrapper">
            <div className="loginContainer">
                <h1>Login</h1>
                <form className="login-form" action="">
                    <input autoComplete="off" onChange={handleOnChange} required className="login-input" type="text" name="username" placeholder="Username" />
                    <input autoComplete="off" onChange={handleOnChange} required className="login-input" type="password" name="password" placeholder="Password" />
                    <button onClick={postData} className="login-btn" type="submit">Login</button>
                </form>
                <Link to="/">Back to home page</Link>
            </div>
        </div>

    )
}

export default Login

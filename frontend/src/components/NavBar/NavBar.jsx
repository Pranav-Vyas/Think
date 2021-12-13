import React, { useEffect, useState } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";


function NavBar() {

    const [auth, setauth] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        console.log("home use effect");
        const checkAuthentication = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await fetch("http://localhost:5000/auth", {
                    mode: 'cors',
                    method: "get",
                    headers: new Headers({
                        'Accept': "application/json",
                        "content-type": "application/json",
                        "Authorization": `Bearer ${token}`
                    })
                });
                if (res.status !== 200) {
                    console.log('if not 200');
                    throw new Error(res.error);
                } else {
                    console.log("authenticated");
                    setauth(true);
                }

            } catch {
                console.log('in nav catch');
                setauth(false)
            }
        }
        checkAuthentication();
    }, [])

    const handleLogoutClick = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const res = await fetch("http://localhost:5000/logout", {
            mode: 'cors',  // this cannot be 'no-cors'
            method: "GET",
            headers: new Headers({
                'Accept': "application/json",
                "content-type": "application/json",
                "Authorization": `Bearer ${token}`
            })
        });
        if (res.status === 200) {
            localStorage.removeItem('token');
            localStorage.removeItem('LoginId');
            // window.location.reload(false);
            navigate("/login");

        } else {
            alert("Logout failed")
        }
    }

    return (
        <>
            <nav id="#nav" className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">Think</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#">About</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="/#testimonials">Products</HashLink>
                        </li>
                        <li className="nav-item">
                            <HashLink smooth className="nav-link" to="#footer">Contact</HashLink>
                        </li>
                        {
                            !auth &&

                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        }
                        {
                            auth &&

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#nav" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item nav-link" to="/admin">Dashboard</Link>
                                    <button onClick={handleLogoutClick} className="dropdown-item nav-link" type='submit'>Logout</button>
                                </div>
                            </li>
                        }
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar

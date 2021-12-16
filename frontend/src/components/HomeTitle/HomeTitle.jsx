import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './HomeTitle.css';
import logo from './logo.png'
function HomeTitle() {
    return (
        <div id="home-title">
            {/* Nav Bar */}
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="/"><img className='nav-logo' src={logo} alt="THINK" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <HashLink smooth className="nav-link" to="#">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink smooth className="nav-link" to="/#testimonials">Products</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink smooth className="nav-link" to="/#footer">Contact</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>



                {/* Title */}

                <div className="row">
                    <div className="col-lg-6">
                        {/* <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, qui.</h1> */}
                        <p>Established in 2012, Indian Emporium has made a name for itself in the market by proving to be a reliable manufacturer of high quality Printed Fabric and Apparel manufacturer. State-of-the-art machinery combined with efficient manufacturing processes, strong technical expertise and skilled labor coupled with innovation is the key to our growth and success. Indian Emporium has a stringent process control in its Manufacturing process. Indian Emporium has established its Quality and Reliability among its customers.
We are continually improving to cater to the ever evolving needs of our customers, industry and environment. Our continual improvement programs are focused on Cost Efficiency, reducing environmental hazard and reducing the manufacturing hazards for our employees. We believe in building business relationship on the basis of trust.</p>
                        
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default HomeTitle

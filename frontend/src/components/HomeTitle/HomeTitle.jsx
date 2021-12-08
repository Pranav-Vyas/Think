import React from 'react';
import './HomeTitle.css';

function HomeTitle() {
    return (
        <div id="home-title">
            {/* Nav Bar */}
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href="">Brand-Name</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#footer">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#cta">Download</a>
                            </li>
                        </ul>
                    </div>
                </nav>



                {/* Title */}

                <div className="row">
                    <div className="col-lg-6">
                        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, qui.</h1>
                        
                        <button type="button" className="btn btn-dark btn-lg download-button">Download</button>
                        
                        <button type="button" className="btn btn-outline-light btn-lg download-button">Download</button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default HomeTitle

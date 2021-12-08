import React from 'react';
import "./Testimonial.css";

function Testimonial() {
    return (
        <div id="testimonials">
            <div id="testimonial-carousel" className="carousel slide" data-ride="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h2 className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates in cupiditate .</h2>
                        {/* <img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"/> */}
                        <em>Lorem, ipsum.</em>
                    </div>

                    <div className="carousel-item">
                        <h2 className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur hic amet.</h2>
                        {/* <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"/> */}
                        <em>Lorem, ipsum.</em>
                    </div>

                </div>
                <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default Testimonial

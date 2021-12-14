import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import "./Testimonial.css";

function Testimonial({images}) {

    const runCallback = (cb) => {
        return cb();
    };

    const generateKey = (pre) => {
        return `${ pre }_${ new Date().getTime() }`;
    }

    return (
        <div id="testimonials">
            <div id="testimonial-carousel" className="carousel slide" data-ride="false" >
                <div className="carousel-inner">

                    {
                        runCallback(() => {
                            const row = [];
                            if (images.length > 0) {
                                for (var i = 0; i < images.length; i=i+3) {
                                    if (i === 0) {
                                        row.push(
                                            <CarouselItem key={generateKey(i)} active="active" images={images.slice(i,i+3)} />     
                                            // <CarouselItem key={images[0]._id.toString()} active="active" images={images.slice(i,i+3)} />     
                                        );
                                    } else {
                                        row.push(
                                            <CarouselItem key={generateKey(i)} active="" images={images.slice(i,i+3)} />     
                                            // <CarouselItem key={images[0]._id.toString()} active="" images={images.slice(i,i+3)} />     
                                        );
                                    }
                                    
                                }
                            } else {
                                row.push(
                                    <CarouselItem key={generateKey(1001)} active="active" images={[]} />     
                                );
                            }
                            return row;
                          })
                    }


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

import React from 'react';
import "./CarouselItem.css";

function CarouselItem({ active, images }) {
    return (
        <>
            
            <div className={`carousel-item ${active}`}>
                {
                    images.map((image) => {
                        console.log(image.image);
                        return (
                            <img key={image._id} className="carousel-img" src={`http://localhost:5000/upload/${image._id}`} alt="" />
                        )
                    })
                }
                {
                    images.length === 0 &&
                    <h4>No products available</h4>
                }
            </div>
        </>
    )
}

export default CarouselItem

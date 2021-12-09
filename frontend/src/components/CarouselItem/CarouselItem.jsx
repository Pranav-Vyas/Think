import React from 'react';
import "./CarouselItem.css";

function CarouselItem({ active, images }) {
    return (
        <>
            {/* <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}

            {/* <div className={`carousel-item ${active}`}>
                {
                    images.map((image) => {
                        return (
                            <div key={image} className="card carousel-img" >
                                <img className="card-img-top" src={image} alt="Card image cap" />
                                <div className="card-body">
        
                                    <p className="card-text">Some quick example</p>
        
                                </div>
                            </div>
                        )
                    })
                }
            </div> */}

            <div className={`carousel-item ${active}`}>
                {
                    images.map((image) => {
                        return (
                            <img key={image} className="carousel-img" src={image} alt="" />
                        )
                    })
                }
            </div>
        </>
    )
}

export default CarouselItem

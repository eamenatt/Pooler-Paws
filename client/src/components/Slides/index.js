import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

function Slides() {
    return (

        <Carousel className="slideStyle">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/slide1.jpg`}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/slide2.jpg`}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Volunteer at your local shelter!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/slide3.jpg`}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Rescue animals in need!</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slides;

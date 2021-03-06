import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

function Slides() {
    return (

        <Carousel className="slideStyle">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/tommie.jpg`}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Loving animals in need of a home</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/bootsie.jpg`}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Find a furry friend!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={`${process.env.PUBLIC_URL}/assets/twocats.jpg`}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Rescue animals in need</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slides;
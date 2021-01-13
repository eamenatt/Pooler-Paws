import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";

function Slides() {
    return (

        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className="title">About Us</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Cats</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://api.time.com/wp-content/uploads/2015/02/cats.jpg?quality=85&w=1024&h=512&crop=1"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3 className="title">Cats</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slides;
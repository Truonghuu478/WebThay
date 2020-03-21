import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";

class indexCarousel extends Component {
    constructor(props){
        super(props);
    }
  render() {
   return(
        <Carousel className="link1">
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src={`img/bg-2.jpg`}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3  data-aos="fade-down">First slide label</h3>
        <p data-aos="fade-down">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`img/bg-2.jpg`}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 data-aos="fade-down">Second slide label</h3>
        <p data-aos="fade-down" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`img/bg-2.jpg`}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 data-aos="fade-down">Second slide label</h3>
        <p data-aos="fade-down" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={`img/bg-3.jpg`}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
  }
  componentDidMount(){
      AOS.init({
        duration:"2000",
        disableMutationObserver:true,

      });
  }
}
export default indexCarousel;

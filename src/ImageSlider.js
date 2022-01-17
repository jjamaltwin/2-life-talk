import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

export default function ImageSlider() {
  return (
    <div
      className="slider"
      style={{ display: "block", width: 700, padding: 30 }}
    >
      <Carousel>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100"
            height="400rem"
            src="sunset.jpg"
            alt="One"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="butterfly.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="eagle.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="waterfall.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="sunrise.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="bbutterfly.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="peer.jpg"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="pma.png"
            alt="Two"
          />
        </Carousel.Item>
        <Carousel.Item interval={2900}>
          <img
            className="d-block w-100 "
            height="400rem"
            src="lighthouse.jpg"
            alt="Two"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import '../css/heroCarousel.css';
const HeroCarousel = ({ data }) => {
  console.log(data && Array.isArray(data) ? data.length : 0);
  return (
    <CarouselProvider
      naturalSlideWidth={10}
      naturalSlideHeight={10}
      totalSlides={data && Array.isArray(data) ? data.length : 0}
    >
      {/* <div id="template-mo-zay-hero-carousel" class="carousel slide" data-bs-ride="carousel"> */}
      {/* <ol class="carousel-indicators">
            <li data-bs-target="#template-mo-zay-hero-carousel" data-bs-slide-to="0" class="active"></li>
        // </ol> */}

      <Slider>
        {data && Array.isArray(data)
          ? data.map((item, index) => (
              <Slide index={index.id} key={index.id}>
                <div>
                  <p className="legend">{}</p>

                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                            <img
                              class="img-fluid"
                              src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                              alt=""
                            />
                          </div>
                          <div class="col-lg-6 mb-0 d-flex align-items-center">
                            <div class="text-align-left align-self-center">
                              <h1 class="h1 text-success">
                                <b>Muno</b> eCommerce
                              </h1>
                              <h3 class="h2">{item.attributes.title}</h3>
                              <p>
                                {" "}
                                {item.attributes.description.substring(
                                  0,
                                  150
                                )}{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ButtonBack>
                  {" "}
                  <a
                    class="carousel-control-prev text-decoration-none w-auto ps-3 text-black"
                    href="#template-mo-zay-hero-carousel"
                    role="button"
                    data-bs-slide="prev"
                  >
                    <FaChevronLeft />
                  </a>
                </ButtonBack>
                <ButtonNext>
               
                  <a
                    class="carousel-control-next text-decoration-none w-auto pe-3"
                    href="#template-mo-zay-hero-carousel"
                    role="button"
                    data-bs-slide="next"
                  >
                    <FaChevronRight />
                  </a>
                </ButtonNext>
              </Slide>
            ))
          : null}
      </Slider>
    </CarouselProvider>
  );
};

export default HeroCarousel;


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { getCarousalProducts } from "../store/prodectSlice";
import React, { CSSProperties ,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
const HeroCarousel = ({ data }) => {

  
// console.log("carousalProducts",carousalProducts);
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
    padding: '20px',
};

  return (
    <>
  <Carousel showArrows={true} dynamicHeight={false} showStatus={false} useKeyboardArrows={true} renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                       <FaChevronLeft />
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                        <FaChevronRight/>
                    </button>
                )
            }>

       {data && Array.isArray(data)
          ? data.map((item, index) => (

   
                <div>
               

                  <div class="carousel-inner" key={item.id}>
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="row p-5">
                          <div class=" col-md-8 col-lg-6 order-lg-last">
                            <img
                            
                              src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                              alt=""
                              width={588}
                              height={588}
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
             
            ))
          : null}
</Carousel> 



   
    </>
     
    


  );
};

export default HeroCarousel;



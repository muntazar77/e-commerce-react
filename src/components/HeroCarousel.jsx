
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
const HeroCarousel = ({ data }) => {

  
// console.log("carousalProducts",carousalProducts);
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
    padding: '20px',
   
  };

  return (
    <>
  <Carousel showArrows={true} showThumbs={false} dynamicHeight={false} showStatus={false} useKeyboardArrows={true} renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <Link onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
               <FaChevronLeft  style={{ fontSize: '40px', color: '#0000008f' }}/>
            </Link>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <Link onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
              <FaChevronRight  style={{ fontSize: '40px', color: '#0000008f' }}/>
            </Link>
          )
        }>

       {data && Array.isArray(data)
          ? data.map((item, index) => (

   
                <div key={item.id}>
               

                  <div className="carousel-inner" >
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="row p-5">
                          <div className=" col-md-8 col-lg-6 order-lg-last">
                            <img
                            
                              src={`${process.env.REACT_APP_URL}${item.attributes.image.data.attributes.url}`}
                              alt=""
                              width={588}
                              height={588}
                            />
                          </div>
                          <div className="col-lg-6 mb-0 d-flex align-items-center">
                            <div className="text-align-left align-self-center">
                              <h1 className="h1 text-success">
                                <b>Muno</b> eCommerce
                              </h1>
                              <h3 className="h2">{item.attributes.title}</h3>
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



import { getCarousalProducts, getFeaturedProducts , getTrendProducts } from "../store/prodectSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeroCarousel from "../components/HeroCarousel";
import { useEffect } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import TrendProducts from "../components/TrendProducts";
const Home = () => {
  const { isLoding, carousalProducts, featuredProducts  ,trendProducts} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  
  
   useEffect(() => {
     dispatch(getFeaturedProducts("featured"));
    dispatch(getCarousalProducts("carousel"));
    // dispatch(getProducts({ page: 1, pageSize: 2 })); // Fetch data for the first page
    dispatch(getTrendProducts("trening"));

   },[dispatch]);

 

   return (
    <>
    {/* <!-- Start Carousel --> */}
    <HeroCarousel data={carousalProducts.data} />





      {isLoding ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>{" "}
        </div>
      ) : (
        <>
        {/* To get all products */}
        <TrendProducts data={trendProducts.data} /> 

        </>
      )}

      {/* <!-- Start Categories of The Month --> */}
      <section className="container py-5" >
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to={"/shop"}>
              <img
                src="/assets/img/category_img_01.jpg"
                className="rounded-circle img-fluid border"
                alt="fdkl"
              />
            </Link>
            <h5 className="text-center mt-3 mb-3">Watches</h5>
            <p className="text-center">
              <Link className="btn btn-success" to={"/shop"}>
                Go Shop
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to={"/shop"}>
              <img
                src="/assets/img/category_img_02.jpg"
                className="rounded-circle img-fluid border"
                alt="er"
              />
            </Link>
            <h2 className="h5 text-center mt-3 mb-3">Shoes</h2>
            <p className="text-center">
              <Link className="btn btn-success" to={"/shop"}>
                Go Shop
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <Link to={"/shop"}>
              <img
                src="/assets/img/category_img_03.jpg"
                className="rounded-circle img-fluid border"
                alt=""
              />
            </Link>
            <h2 className="h5 text-center mt-3 mb-3">Accessories</h2>
            <p className="text-center">
              <Link className="btn btn-success" to={"/shop"}>
                Go Shop
              </Link>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End Categories of The Month --> */}


              
        {/* To get featured products */}
        <FeaturedProducts data={featuredProducts.data} />
    </>
  );
};

export default Home;

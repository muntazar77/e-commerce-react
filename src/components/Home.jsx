import { getProducts } from "../store/prodectSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Products from "./Products";
const Home = () => {
  const { isLoding, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
    console.log(products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {isLoding ? (
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>{" "}
        </div>
      ) :
      (<Products data={products} />)}
            
        
     

      {/* <!-- Start Categories of The Month --> */}
      <section class="container py-5">
        <div class="row text-center pt-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">Categories of The Month</h1>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/">
              <img
                src="/assets/img/category_img_01.jpg"
                class="rounded-circle img-fluid border"
                alt="fdkl"
              />
            </a>
            <h5 class="text-center mt-3 mb-3">Watches</h5>
            <p class="text-center">
              <a class="btn btn-success" href="e">
                Go Shop
              </a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/">
              <img
                src="/assets/img/category_img_02.jpg"
                class="rounded-circle img-fluid border"
                alt="er"
              />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Shoes</h2>
            <p class="text-center">
              <a class="btn btn-success" href="d">
                Go Shop
              </a>
            </p>
          </div>
          <div class="col-12 col-md-4 p-5 mt-3">
            <a href="/">
              <img
                src="/assets/img/category_img_03.jpg"
                class="rounded-circle img-fluid border"
                alt=""
              />
            </a>
            <h2 class="h5 text-center mt-3 mb-3">Accessories</h2>
            <p class="text-center">
              <a class="btn btn-success" href="/">
                Go Shop
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* <!-- End Categories of The Month --> */}
    </>
  );
};

export default Home;

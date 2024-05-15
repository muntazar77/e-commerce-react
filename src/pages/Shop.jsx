import { FaEye ,FaStar ,FaRegHeart ,FaCartPlus} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect,  } from 'react';
import { useDispatch , useSelector } from "react-redux";
//to get the products and categories from the store
import { getProducts } from "../store/prodectSlice";
import { getCategories } from "../store/categoriesSlice"

import ProductFilter from "../components/ProductFilter";

const Shop = () => {
    const dispatch = useDispatch();
    const { isLoading, categories } = useSelector((state) => state.categories);
    const { products } = useSelector((state) => state.products);

  

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);


    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!categories || !Array.isArray(categories.data)) {
        return <div>Error: Categories not found.</div>;
    }

 


    return (
        <>
    
        {/* <!-- Start Content --> */}

        <ProductFilter categories={categories.data} products={products.data} />

<section className="bg-light py-5">
  <div className="container my-4">
      <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Brands</h1>
              <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  Lorem ipsum dolor sit amet.
              </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">
                  {/* <!--Controls--> */}
                  <div className="col-1 align-self-center">
                      <Link className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                          <i className="text-light fas fa-chevron-left"></i>
                      </Link>
                  </div>
                  {/* <!--End Controls--> */}

                  {/* <!--Carousel Wrapper--> */}
                  <div className="col">
                      <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">
                          {/* <!--Slides--> */}
                          <div className="carousel-inner product-links-wap" role="listbox">

                              {/* <!--First slide--> */}
                              <div className="carousel-item active">
                                  <div className="row">
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></Link>
                                      </div>
                                  </div>
                              </div>
                              {/* <!--End First slide--> */}

                              {/* <!--Second slide--> */}
                              <div className="carousel-item">
                                  <div className="row">
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></Link>
                                      </div>
                                  </div>
                              </div>
                              {/* <!--End Second slide--> */}

                              {/* <!--Third slide--> */}
                              <div className="carousel-item">
                                  <div className="row">
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></Link>
                                      </div>
                                      <div className="col-3 p-md-5">
                                          <Link to="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></Link>
                                      </div>
                                  </div>
                              </div>
                              {/* <!--End Third slide--> */}

                          </div>
                          {/* <!--End Slides--> */}
                      </div>
                  </div>
                  {/* <!--End Carousel Wrapper--> */}

                  {/* <!--Controls--> */}
                  <div className="col-1 align-self-center">
                      <Link className="h1" href="#multi-item-example" role="button" data-bs-slide="next">
                          <i className="text-light fas fa-chevron-right"></i>
                      </Link>
                  </div>
                  {/* <!--End Controls--> */}
              </div>
          </div>
      </div>
  </div>
</section>
{/* <!--End Brands--> */}
  </>
    );
};

 

export default Shop;
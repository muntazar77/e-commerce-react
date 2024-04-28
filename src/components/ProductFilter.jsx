import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
// import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";
import { FaEye, FaStar, FaRegHeart, FaCartPlus } from "react-icons/fa";

import { Link } from "react-router-dom";
const ProductFilter = ({ categories, products }) => {
  const gridRef = useRef(null);

  const isoRef = useRef(null);

  useEffect(() => {
    imagesLoaded(gridRef.current, function () {
      isoRef.current = new Isotope(gridRef.current, {
        itemSelector: ".grid-item",
        // layoutMode: "fitColumns",
      });
    });
  }, [products]);

  //this function is for show rating
  const rating = (item) => {
    const ratingList = Array(5).fill().map((_, index) => {
      if (index < item) {
        return <FaStar className="text-warning" />;
      } else {
        return <FaStar className="text-muted" />;
      }
    });
    return ratingList;
  };

  const handleClick = (filter) => {
    isoRef.current.arrange({ filter: filter === "all" ? "*" : `.${filter}` });
  };

  if (!products || !Array.isArray(products)) {
    return <div>Error: Categories not found.</div>;
  }

  const categoryList = categories.map((category) => {
    return (
      <div key={category.id}>
        <button
          className={`btn btn-dark m-2`}
          onClick={() => handleClick(`${category.attributes.name}`)}
        >
          {category.attributes.name} ({category.attributes.products.data.length})
        </button>
      </div>
    ); // Add a return statement here
  });
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              <button
                className="btn btn-dark m-2 "
                onClick={() => handleClick("all")}
              >
                All
              </button>
              <li className="pb-3">{categoryList}</li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-inline shop-top-menu pb-3 pt-1">
                  <li className="list-inline-item">
                    <Link
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      All
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="h3 text-dark text-decoration-none mr-3"
                      href="#"
                    >
                      Men's
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link
                      className="h3 text-dark text-decoration-none"
                      href="#"
                    >
                      Women's
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select className="form-control">
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Item</option>
                  </select>
                </div>
              </div>
            </div>
            {/* for show the products */}
            {/* {productsList}  */}

            <div ref={gridRef} className="grid row">
              {products.map((item) => (
                <div
                  key={item.id}
                  className={`grid-item col-md-4 ${item.attributes.categroys.data[0].attributes.name}`}
                >
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <Link to={`/shop/${item.id}`}>
                        <img
                          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                          className="card-img rounded-0 img-fluid"
                          alt="d"
                          style={{ height: "302", width: "302" }}
                        />
                      </Link>

                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <Link
                              className="btn btn-success text-white"
                              href="shop-single.html"
                            >
                              <FaRegHeart />
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="btn btn-success text-white mt-2"
                              to={`/shop/${item.id}`}
                            >
                              <FaEye />
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="btn btn-success text-white mt-2"
                              to={`/shop/${item.id}`}
                            >
                              <FaCartPlus />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <Link
                        to={`/shop/${item.id}`}
                        className="h3 text-decoration-none"
                      >
                        {item.attributes.title.substring(0, 30)}
                      </Link>

                      <p className="card-text text-center">
                        {item.attributes.categroys.data[0].attributes.name})
                      </p>
                      <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                      
                          {rating(item.attributes.rating)}
                        </li>
                      </ul>
                      <p className="text-center mb-0">
                        ${item.attributes.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* for pagination */}
            {/* <div div="row">
              <ul className="pagination pagination-lg justify-content-end">
                <li className="page-item disabled">
                  <Link
                    className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                    tabIndex={"-1"}
                  >
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                    href="#"
                  >
                    3
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilter;

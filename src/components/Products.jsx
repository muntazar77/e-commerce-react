import { useState } from "react";
import { Link } from "react-router-dom";

const Products = ({ data }) => { 
  // Check if data is defined and is an array
  if (!data || !Array.isArray(data)) {
    return <div>Loading...</div>; // or return a default value or error component
  }


  const productsList = data.map((item) => (
    <div class="col-12 col-md-4 mb-4" key={item.id}>
        {console.log(item.attributes)} 
      <div class="card h-100">
        <Link to={`/shop/${item.id}`}>
          <img
            src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
            class="card-img-top"
            alt="d"
            style={{ height: "414px" }}
          />
        </Link>
        <div class="card-body">
          <ul class="list-unstyled d-flex justify-content-between">
            <li>
              <i class="text-warning fa fa-star"></i>
              <i class="text-warning fa fa-star"></i>
              <i class="text-warning fa fa-star"></i>
              <i class="text-warning fa fa-star"></i>
              <i class="text-warning fa fa-star"></i>
            </li>
            <li class="text-muted text-right">$ {item.attributes.price}</li>
          </ul>
          <Link
            to={`/shop/${item.id}`}
            class="h2 text-decoration-none text-dark"
          >
            {item.attributes.title.substring(0, 20)}..
          </Link>
          <p class="card-text">
          {item.attributes.description.substring(0,100)}..
          </p>
          <p class="text-muted">Reviews (74)</p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {/* <!-- Start Featured Product --> */}
      <section class="bg-light">
        <div class="container py-5">
          <div class="row text-center py-3">
            <div class="col-lg-6 m-auto">
              <h1 class="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div class="row">{productsList}</div>
        </div>
      </section>
      {/* <!-- End Featured Product --> */}
    </>
  );
};

export default Products;
import { FaStar,FaEye ,FaCartPlus} from "react-icons/fa";

import { Link } from "react-router-dom";

const Products = ({ data }) => { 
  // Check if data is defined and is an array
  if (!data || !Array.isArray(data)) {
    return <div>Loading...</div>; // or return a default value or error component
  }
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

  const productsList = data.map((item) => (
    <div className="col-12 col-md-4 mb-4" key={item.id}>
        {console.log(item.attributes)} 
      <div className="card h-100">
        <Link to={`/shop/${item.id}`}>
          <img
            src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
            className="card-img-top"
            alt="d"
            style={{ height: "414px" }}
          />
        </Link>
        <div className="card-body">
          <ul className="list-unstyled d-flex justify-content-between">
            <li>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
              <i className="text-warning fa fa-star"></i>
            </li>
            <li className="text-muted text-right">$ {item.attributes.price}</li>
          </ul>
          <Link
            to={`/shop/${item.id}`}
            className="h2 text-decoration-none text-dark"
          >
            {item.attributes.title.substring(0, 23)}..
          </Link>
          <p className="card-text">
          {item.attributes.description.substring(0,100)}..
          </p>
          <ul className="list-unstyled d-flex justify-content-center m-1">
                        <li>
                          {rating(item.attributes.rating)}
                          <Link
                              className="btn btn-success text-white m-2 "
                              to={`/shop/${item.id}`}
                            >
                              <FaEye /> </Link>
                              <Link
                              className="btn btn-success text-white m-2 "
                              to={`/shop/${item.id}`}
                            >
                              <FaCartPlus />
                            </Link>
                        </li>
                       
                       
                          <li>
                           
                          </li>
                      </ul>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      {/* <!-- Start Featured Product --> */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Featured Product</h1>
              <p>
                Reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
          <div className="row">{productsList}</div>
        </div>
      </section>
      {/* <!-- End Featured Product --> */}
    </>
  );
};

export default Products;
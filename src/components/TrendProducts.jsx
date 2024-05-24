import { IoRemoveCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaStar, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { addToCart, removeFromCart } from "../store/prodectSlice";

const TrendProducts = ({ data }) => {
  const { cartProductIds } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  // This function is for showing the rating of a product
  const rating = (item, id) => {
    const ratingList = Array(5)
      .fill()
      .map((_, index) => {
        if (index < item) {
          return <FaStar className="text-warning" key={index} />;
        } else {
          return <FaStar className="text-muted" key={index} />;
        }
      });
    return ratingList;
  };

  if (!data || !Array.isArray(data)) {
    return <div>Error: Categories not found.</div>;
  }

  return (
    <>
      <section className="bg-white">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-12 mb-4">
              <h1 className="h1">Trening Products</h1>
            </div>
            {data.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <Link to={`/shop/${item.id}`}>
                      <img
                        src={`${process.env.REACT_APP_URL}${item.attributes.image.data.attributes.url}`}
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
                          {!cartProductIds.includes(item) && (
                            <Link
                              className="btn btn-success text-white mt-2"
                              onClick={() => dispatch(addToCart(item))}
                            >
                              <FaCartPlus />
                            </Link>
                          )}
                          {cartProductIds.includes(item) && (
                            <Link
                              className="btn btn-success text-white mt-2"
                              onClick={() => dispatch(removeFromCart(item))}
                            >
                              <IoRemoveCircle />
                            </Link>
                          )}
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
                      {item.attributes.categroys.data[0].attributes.name}
                    </p>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>{rating(item.attributes.rating, item.id)}</li>
                    </ul>
                    <p className="text-center mb-0">${item.attributes.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
        </div>
      </section>
    </>
  );
};

export default TrendProducts;

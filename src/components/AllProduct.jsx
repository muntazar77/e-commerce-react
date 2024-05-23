import { IoRemoveCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaEye, FaStar, FaRegHeart, FaCartPlus } from "react-icons/fa";
import { addToCart, removeFromCart } from "../store/prodectSlice";

const AllProduct = ({ data }) => {
  const { cartProductIds } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //this function is for show rating of product
  const rating = (item, id) => {
    const ratingList = Array(5)
      .fill()
      .map((_, index) => {
        if (index < item) {
          return <FaStar className="text-warning" />;
        } else {
          return <FaStar className="text-muted" />;
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
          <div class="row text-center py-3">
            <div className="col-lg-12 mb-4">
              <h1 className="h1">All Products</h1>
            </div>
            {data.map((item) => (
              <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
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
                      {item.attributes.categroys.data[0].attributes.name})
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
          <div div="row">
            <ul class="pagination pagination-lg justify-content-end">
              <li class="page-item disabled">
                <Link
                  class="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                  href="#"
                  tabindex="-1"
                >
                  1
                </Link>
              </li>
              <li class="page-item">
                <Link
                  class="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                  href="#"
                >
                  2
                </Link>
              </li>
              <li class="page-item">
                <Link
                  class="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                  href="#"
                >
                  3
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;

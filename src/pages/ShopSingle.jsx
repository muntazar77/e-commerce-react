import {useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Fragment } from "react";
import { getSingleProduct , addToCart, removeFromCart} from "../store/prodectSlice";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopSingle = () => {
  const { singleProduct ,cartProductIds} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let param = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(param.id));
  }, [dispatch, param.id]);

  const data = singleProduct?.data.attributes;
  //  const data =singleProduct

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

  if (!data && (data === undefined || data === "")) {
    return (
      <div className="text-center">
        <h2>there is no content</h2>
      </div>
    );
  }

  return (
    <>
      {/* <!-- Open Content --> */}
      <Fragment>
        <section className="bg-light">
          <div className="container pb-5">
            <div className="row">
              <div className="col-lg-5 mt-5">
                <div className="card mb-3">
                     <img
                        className="card-img img-fluid"
                        src={`${process.env.REACT_APP_URL}${data.image.data.attributes.url}`}
                        id="product-detail"
                        alt=""
                    />
                </div>
            
              </div>
              <div className="col-lg-7 mt-5">
                <div className="card">
                  <div className="card-body">
                    <h1 className="h2">{data.title}</h1>
                    <p className="h3 py-2">{data.price}$</p>
                    <p className="py-2">
                     
                      <span className="list-inline-item text-dark">
                        Rating {rating(data.rating)}
                      </span>
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <h6>Category:</h6>
                      </li>
                      <li className="list-inline-item">
                        <p className="text-muted">
                          <strong>{data.categroys.data[0].attributes.name}</strong>
                          
                        </p>
                      </li>
                    </ul>

                    <h6 className="bold"> Description:</h6>
                    <p>{data.description}</p>
                    <br />

                    <form action="" method="GET">
                      <input
                        type="hidden"
                        name="product-title"
                        value="Activewear"
                      />
                      <div className="row">
                        <div className="col-auto">
                          <ul className="list-inline pb-3">
                            <li className="list-inline-item">
                              Size :
                              <input
                                type="hidden"
                                name="product-size"
                                id="product-size"
                                value="S"
                              />
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">S</span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">M</span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">L</span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success btn-size">XL</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-auto">
                          <ul className="list-inline pb-3">
                            <li className="list-inline-item text-right">
                              Quantity
                              <input
                                type="hidden"
                                name="product-quanity"
                                id="product-quanity"
                                value="1"
                              />
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success" id="btn-minus">
                                -
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="badge bg-secondary" id="var-value">
                                1
                              </span>
                            </li>
                            <li className="list-inline-item">
                              <span className="btn btn-success" id="btn-plus">
                                +
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="row pb-3">
                        <div className="col d-grid">
                          
                          <Link to="/checkout" className="btn btn-success btn-lg">Buy</Link>
                        </div>
                        <div className="col d-grid">
                      

                          {!cartProductIds.includes(data) && (
                              <Link className="btn btn-success text-white mt-2"   onClick={() => dispatch(addToCart(data))}> 
                             Add To Cart
                              </Link>
                            )}
                            {cartProductIds.includes(data) && (
                              <Link className="btn btn-success text-white mt-2"  onClick={() => dispatch(removeFromCart(data))}>
                                 Remove form cart
                              </Link>
                            )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </>
  );
};

export default ShopSingle;

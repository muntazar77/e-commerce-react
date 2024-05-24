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
      <div class="text-center">
        <h2>there is no content</h2>
      </div>
    );
  }

  return (
    <>
      {/* <!-- Open Content --> */}
      <Fragment>
        <section class="bg-light">
          <div class="container pb-5">
            <div class="row">
              <div class="col-lg-5 mt-5">
                <div class="card mb-3">
                     <img
                        class="card-img img-fluid"
                        src={`${process.env.REACT_APP_URL}${data.image.data.attributes.url}`}
                        id="product-detail"
                        alt=""
                    />
                </div>
            
              </div>
              <div class="col-lg-7 mt-5">
                <div class="card">
                  <div class="card-body">
                    <h1 class="h2">{data.title}</h1>
                    <p class="h3 py-2">{data.price}$</p>
                    <p class="py-2">
                     
                      <span class="list-inline-item text-dark">
                        Rating {rating(data.rating)}
                      </span>
                    </p>
                    <ul class="list-inline">
                      <li class="list-inline-item">
                        <h6>Category:</h6>
                      </li>
                      <li class="list-inline-item">
                        <p class="text-muted">
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
                      <div class="row">
                        <div class="col-auto">
                          <ul class="list-inline pb-3">
                            <li class="list-inline-item">
                              Size :
                              <input
                                type="hidden"
                                name="product-size"
                                id="product-size"
                                value="S"
                              />
                            </li>
                            <li class="list-inline-item">
                              <span class="btn btn-success btn-size">S</span>
                            </li>
                            <li class="list-inline-item">
                              <span class="btn btn-success btn-size">M</span>
                            </li>
                            <li class="list-inline-item">
                              <span class="btn btn-success btn-size">L</span>
                            </li>
                            <li class="list-inline-item">
                              <span class="btn btn-success btn-size">XL</span>
                            </li>
                          </ul>
                        </div>
                        <div class="col-auto">
                          <ul class="list-inline pb-3">
                            <li class="list-inline-item text-right">
                              Quantity
                              <input
                                type="hidden"
                                name="product-quanity"
                                id="product-quanity"
                                value="1"
                              />
                            </li>
                            <li class="list-inline-item">
                              <span class="btn btn-success" id="btn-minus">
                                -
                              </span>
                            </li>
                            <li class="list-inline-item">
                              <span class="badge bg-secondary" id="var-value">
                                1
                              </span>
                            </li>
                            <li class="list-inline-item">
                              <span class="btn btn-success" id="btn-plus">
                                +
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="row pb-3">
                        <div class="col d-grid">
                          
                          <Link to="/checkout" class="btn btn-success btn-lg">Buy</Link>
                        </div>
                        <div class="col d-grid">
                      

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

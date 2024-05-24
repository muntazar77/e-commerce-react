import "../css/checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { removeFromCart, clearAllItems } from "../store/prodectSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const { cartProductIds } = useSelector((state) => state.products);
  //this function is for show rating
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

  const totalPrice = cartProductIds.reduce(
    (price, item) => price + item.attributes.price,
    0
  );

  return (
    <div className="checkout">
      <div className="container">

        {/* if there are no product show this messge */}

        {cartProductIds.length === 0 && (
          <div className="no-items">
                <h2 className="desc">No items in the cart</h2>
          </div>
        )}
        {/* To know Is there any product to show */}
        {cartProductIds.length > 0 && (
          <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
              <div className="col-md-9">
                <div className="ibox">
                  <div className="ibox-title">
                    <span className="pull-right">
                      (<strong>{cartProductIds.length}</strong>) items
                    </span>
                    <h5>Items in your cart</h5>
                  </div>

                  {cartProductIds.map((item) => (
                    <div className="ibox-content">
                      <div className="table-responsive">
                        <table className="table shoping-cart-table">
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
                                  alt="product"
                                  width={90}
                                  height={100}
                                />
                              </td>
                              <td className="desc">
                                <h3>
                                  <Link href="#" className="text-navy">
                                    {item.attributes.title.substring(0, 30)}
                                  </Link>
                                </h3>
                                <p className="small"></p>
                                <dl className="small m-b-none">
                                  {rating(item.attributes.rating, item.id)}
                                  <dt>Description lists</dt>
                                  <dd>
                                    {item.attributes.description.substring(
                                      0,
                                      180
                                    )}
                                  </dd>
                                </dl>

                                <div className="m-t-sm">
                                  <Link
                                    href="#"
                                    className="text-muted"
                                    onClick={() =>
                                      dispatch(removeFromCart(item.id))
                                    }
                                  >
                                    <i className="fa fa-trash"></i> Remove item
                                  </Link>
                                </div>
                              </td>
                              <td>
                                <h4>${item.attributes.price}</h4>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ))}

                  <div className="ibox-content">
                    <button className="btn btn-primary pull-right">
                      <i className=" fa fa-shopping-cart"></i> Checkout
                    </button>
                    <button
                      className="btn btn-primary pull-right"
                      onClick={() => dispatch(clearAllItems())}
                    >
                      <MdDelete />
                      Clear All Items
                    </button>
                    <Link to={"/"} className="btn btn-primary ">
                      {" "}
                      <i className="fa fa-arrow-left"></i> Continue shopping
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="ibox">
                  <div className="ibox-title">
                    <h5>Cart Summary</h5>
                  </div>
                  <div className="ibox-content">
                    <span>Total</span>
                    <h2 className="font-bold">
                      {/* $390,00 */}
                      {console.log(totalPrice)}
                      {totalPrice.toFixed(2)}
                    </h2>

                    <hr />
                    <span className="text-muted small">
                      *For United States, France and Germany applicable sales
                      tax will be applied
                    </span>
                    <div className="m-t-sm">
                      <div className="btn-group">
                        <Link href="#" className="btn btn-primary btn-sm">
                          <i className="fa fa-shopping-cart"></i> Checkout
                        </Link>
                        <Link href="#" className="btn btn-white btn-sm">
                          {" "}
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ibox">
                  <div className="ibox-title">
                    <h5>Support</h5>
                  </div>
                  <div className="ibox-content text-center">
                    <h3>
                      <i className="fa fa-phone"></i> +43 100 783 001
                    </h3>
                    <span className="small">
                      Please contact with us if you have any questions. We are
                      avalible 24h.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

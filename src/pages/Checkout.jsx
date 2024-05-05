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
      <div class="container">

        {/* if there are no product show this messge */}

        {cartProductIds.length === 0 && (
          <div class="no-items">
                <h2 className="desc">No items in the cart</h2>
          </div>
        )}
        {/* To know Is there any product to show */}
        {cartProductIds.length > 0 && (
          <div class="wrapper wrapper-content animated fadeInRight">
            <div class="row">
              <div class="col-md-9">
                <div class="ibox">
                  <div class="ibox-title">
                    <span class="pull-right">
                      (<strong>{cartProductIds.length}</strong>) items
                    </span>
                    <h5>Items in your cart</h5>
                  </div>

                  {cartProductIds.map((item) => (
                    <div class="ibox-content">
                      <div class="table-responsive">
                        <table class="table shoping-cart-table">
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
                              <td class="desc">
                                <h3>
                                  <Link href="#" class="text-navy">
                                    {item.attributes.title.substring(0, 30)}
                                  </Link>
                                </h3>
                                <p class="small"></p>
                                <dl class="small m-b-none">
                                  {rating(item.attributes.rating, item.id)}
                                  <dt>Description lists</dt>
                                  <dd>
                                    {item.attributes.description.substring(
                                      0,
                                      180
                                    )}
                                  </dd>
                                </dl>

                                <div class="m-t-sm">
                                  <Link
                                    href="#"
                                    class="text-muted"
                                    onClick={() =>
                                      dispatch(removeFromCart(item.id))
                                    }
                                  >
                                    <i class="fa fa-trash"></i> Remove item
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

                  <div class="ibox-content">
                    <button class="btn btn-primary pull-right">
                      <i class=" fa fa-shopping-cart"></i> Checkout
                    </button>
                    <button
                      class="btn btn-primary pull-right"
                      onClick={() => dispatch(clearAllItems())}
                    >
                      <MdDelete />
                      Clear All Items
                    </button>
                    <Link to={"/"} className="btn btn-primary ">
                      {" "}
                      <i class="fa fa-arrow-left"></i> Continue shopping
                    </Link>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="ibox">
                  <div class="ibox-title">
                    <h5>Cart Summary</h5>
                  </div>
                  <div class="ibox-content">
                    <span>Total</span>
                    <h2 class="font-bold">
                      {/* $390,00 */}
                      {console.log(totalPrice)}
                      {totalPrice.toFixed(2)}
                    </h2>

                    <hr />
                    <span class="text-muted small">
                      *For United States, France and Germany applicable sales
                      tax will be applied
                    </span>
                    <div class="m-t-sm">
                      <div class="btn-group">
                        <Link href="#" class="btn btn-primary btn-sm">
                          <i class="fa fa-shopping-cart"></i> Checkout
                        </Link>
                        <Link href="#" class="btn btn-white btn-sm">
                          {" "}
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ibox">
                  <div class="ibox-title">
                    <h5>Support</h5>
                  </div>
                  <div class="ibox-content text-center">
                    <h3>
                      <i class="fa fa-phone"></i> +43 100 783 001
                    </h3>
                    <span class="small">
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

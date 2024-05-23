import React from "react";
import { FaUser, FaCartArrowDown ,FaFacebookF, FaInstagram ,FaTwitter, FaLinkedin} from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
const Header = ({isLoggedIn}) => {
  const { cartProductIds } = useSelector((state) => state.products);
 const {isLogin } =  useSelector((state) => state.auth);


  const user = JSON.parse(localStorage.getItem('userData'));
  const handleLogout = () => {
     localStorage.removeItem('userData');
      localStorage.removeItem('isLogin',false);
     window.location.reload();
  };
  return (
    <>
      {/* <!-- Start Top Nav --> */}
      <nav
        className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
        id="templatemo_nav_top"
      >
        <div className="container text-light">
          <div className="w-100 d-flex justify-content-between">
            <div>
              <i className="fa fa-envelope mx-2"></i>
              <NavLink
                className="navbar-sm-brand text-light text-decoration-none"
                to="mailto:info@company.com"
              >
                info@company.com
              </NavLink>
              <i className="fa fa-phone mx-2"></i>
              <NavLink
                className="navbar-sm-brand text-light text-decoration-none"
                to="tel:010-020-0340"
              >
                010-020-0340
              </NavLink>
            </div>
            <div>
              <NavLink
                className="text-light m-2"
                to="https://fb.com/templatemo"
                target="_blank"
                rel="sponsored"
              >
              <FaFacebookF size={18} />
              </NavLink>
              <NavLink
                className="text-light m-2"
                to="https://www.instagram.com/"
                target="_blank"
              >
              <FaInstagram  size={18}/>
              </NavLink>
              <NavLink
                className="text-light m-2"
                to="https://twitter.com/"
                target="_blank"
              >
               <FaTwitter size={18}  />
              </NavLink>
              <NavLink
                className="text-light m-2"
                to="https://www.linkedin.com/"
                target="_blank"
              >
                <FaLinkedin size={18}/>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Close Top Nav --> */}

      {/* <!-- Header --> */}
      <nav className="navbar navbar-expand-lg navbar-light shadow">
        <div className="container">
          <div className="row w-100 d-flex justify-content-between align-items-center">
            <div className="col-lg-2">
              <Link
                className="navbar-brand text-success logo h1 align-self-center"
                to="/"
              >
                Muno
              </Link>
              <button
                class="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#templatemo_main_nav"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col-lg-8">
              <div
                className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex "
                id="templatemo_main_nav"
              >
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link "
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link "
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/categories"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link "
                      }
                    >
                      Categories
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link "
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div class=" col-lg-2">
              <div className="d-flex justify-content-between ">
                <Link
                  to={"/checkout"}
                  size={35}
                  class="mr-3 ml-3 nav-icon position-relative text-decoration-none text-dark"
                >
                  <FaCartArrowDown />
                  <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">
                    {cartProductIds.length}
                  </span>
                </Link>
                {isLogin ? (
                  <div>
                    <Link class="nav-icon mr-3 text-decoration-none text-dark"> { user.user.username ? (user.user.username) : null } </Link>

                    <Link
                      onClick={handleLogout}
                      class="nav-icon position-relative mr-4 text-decoration-none "
                    >

                      <RiLogoutBoxRFill size={30} />
                    </Link>
                  </div>
                ) : (
                  <Link
                    to={"/login"}
                    class="nav-icon position-relative text-decoration-none"
                  >
                    <FaUser className="text-dark " />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Close Header --> */}
    </>
  );
};

export default Header;

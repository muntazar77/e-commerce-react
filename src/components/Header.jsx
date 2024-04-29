import React from 'react';
import { useState } from 'react';
import { FaUser,FaSearch ,FaCartArrowDown} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
    const [cartItems, setCartItems] = useState([
        // This is just a placeholder. Replace it with your actual cart items.
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
      ]);
  return (
    <>
    
    {/* <!-- Start Top Nav --> */}
    <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
                <div>
                    <i className="fa fa-envelope mx-2"></i>
                    <Link className="navbar-sm-brand text-light text-decoration-none" to="mailto:info@company.com">info@company.com</Link>
                    <i className="fa fa-phone mx-2"></i>
                    <Link className="navbar-sm-brand text-light text-decoration-none" to="tel:010-020-0340">010-020-0340</Link>
                </div>
                <div>
                    <Link className="text-light" to="https://fb.com/templatemo" target="_blank" rel="sponsored"><i className="fab fa-facebook-f fa-sm fa-fw me-2"></i></Link>
                    <Link className="text-light" to="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram fa-sm fa-fw me-2"></i></Link>
                    <Link className="text-light" to="https://twitter.com/" target="_blank"><i className="fab fa-twitter fa-sm fa-fw me-2"></i></Link>
                    <Link className="text-light" to="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin fa-sm fa-fw"></i></Link>
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
                <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
                    Rens
                </Link>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="col-lg-9">
          

                <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex " id="templatemo_main_nav">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/shop">Shop</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                </div>
            </div>
      

            <div class=" col-lg-1">
                 
                    <div className='d-flex justify-content-between'>
                    <Link  class="mr-3 ml-3 nav-icon position-relative text-decoration-none" href="#">
                        {/* <FaCartArrowDown className="text-dark " /> */}
                        <FaCartArrowDown className="cart-icon">
                          
                        </FaCartArrowDown>
                        <div className="cart-dropdown">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                {item.name}
                                </div>
                            ))}
                            </div>
                        <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </Link>
                    <Link to={"/login"} class="nav-icon position-relative text-decoration-none" href="#">
                        <FaUser className='text-dark ' />
                    </Link>
                    </div>
                </div>
            
        </div>
    </div>
</nav>
    {/* <!-- Close Header --> */}

    </>
  )
};

export default Header;
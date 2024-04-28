import React from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const App = () => {
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
                    Zay
                </Link>
            </div>
            <div className="col-lg-8">
        

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

            <div className="col-lg-2" >
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_search_nav" aria-controls="templatemo_search_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse search" id="templatemo_search_nav">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <button className="input-group-text bg-primary text-light" type="submit" id="button-addon2">
                                  <SearchOutlined / >
                                </button>
                                {/* button for login */}
                                <button className="input-group-text bg-primary text-light mr-3" type="submit" id="button-addon2">
                                  <UserOutlined / >
                                </button>
                            </div>
                            </div>
                            

            </div>
        </div>
    </div>
</nav>
    {/* <!-- Close Header --> */}

    </>
  )
};

export default App;
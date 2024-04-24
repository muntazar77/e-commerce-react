import React from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <>
    
    {/* <!-- Start Top Nav --> */}
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <Link class="navbar-sm-brand text-light text-decoration-none" to="mailto:info@company.com">info@company.com</Link>
                    <i class="fa fa-phone mx-2"></i>
                    <Link class="navbar-sm-brand text-light text-decoration-none" to="tel:010-020-0340">010-020-0340</Link>
                </div>
                <div>
                    <Link class="text-light" to="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></Link>
                    <Link class="text-light" to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></Link>
                    <Link class="text-light" to="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></Link>
                    <Link class="text-light" to="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></Link>
                </div>
            </div>
        </div>
    </nav>
    {/* <!-- Close Top Nav --> */}


    {/* <!-- Header --> */}
    <nav class="navbar navbar-expand-lg navbar-light shadow">
    <div class="container">
        <div class="row w-100 d-flex justify-content-between align-items-center">
            <div class="col-lg-2">
                <Link class="navbar-brand text-success logo h1 align-self-center" to="/">
                    Zay
                </Link>
            </div>
            <div class="col-lg-8">
        

                <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex " id="templatemo_main_nav">
                        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/categories">Categories</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                </div>
            </div>

            <div class="col-lg-2" >
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_search_nav" aria-controls="templatemo_search_nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse search" id="templatemo_search_nav">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <button class="input-group-text bg-primary text-light" type="submit" id="button-addon2">
                                  <SearchOutlined / >
                                </button>
                                {/* button for login */}
                                <button class="input-group-text bg-primary text-light mr-3" type="submit" id="button-addon2">
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
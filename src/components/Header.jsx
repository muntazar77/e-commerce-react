import React from 'react';
// import { Breadcrumb, Layout, Menu, Button, Input } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
// const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <>
    
    {/* <!-- Start Top Nav --> */}
    <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
        <div class="container text-light">
            <div class="w-100 d-flex justify-content-between">
                <div>
                    <i class="fa fa-envelope mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="mailto:info@company.com">info@company.com</a>
                    <i class="fa fa-phone mx-2"></i>
                    <a class="navbar-sm-brand text-light text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
                </div>
                <div>
                    <a class="text-light" href="https://fb.com/templatemo" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://twitter.com/" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                    <a class="text-light" href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
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
                <a class="navbar-brand text-success logo h1 align-self-center" href="index.html">
                    Zay
                </a>
            </div>
            <div class="col-lg-8">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex " id="templatemo_main_nav">
                        <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="shop.html">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact</a>
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
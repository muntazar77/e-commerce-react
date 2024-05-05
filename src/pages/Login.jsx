import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";

import "../css/login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e);
  };

  const handlePasswordChange = (e) => {
    setPassword(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ identifier: username, password }));
  };

  return (
    <>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section">Login Page </h2>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
              <div class="wrap d-md-flex">
                <div class="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div class="text w-100">
                    <h2>Welcome to login</h2>
                    <p>Don't have an account?</p>
                    <Link to="#" class="btn btn-white btn-outline-white">
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div class="login-wrap p-4 p-lg-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Sign In</h3>
                    </div>
                    <div class="w-100">
                      <p class="social-media d-flex justify-content-end">
                        <Link
                          to="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-facebook"></span>
                        </Link>
                        <Link
                          to="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-twitter"></span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <form class="signin-form" onSubmit={handleSubmit}>
                    <div class="form-group mb-3">
                      <label class="label" for="name">
                        Username
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e)=>handleUsernameChange(e.target.value)}
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        require
                        value={password}
                        onChange={(e)=>handlePasswordChange(e.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="form-group d-md-flex"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

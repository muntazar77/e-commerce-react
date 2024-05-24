import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/authSlice";

import "../css/login.css";

const Login = () => {
	const navigate = useNavigate();

	// const {auth, isLoding} = useSelector((state) => state.auth);


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
    dispatch(loginUser({ identifier: username, password }))
	// go to home page if login success else go to login page
 .then((success) => {
  if(success){
    navigate('/');
    window.location.reload();
  }else{
    navigate('/login');
  }
})
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login Page </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                  <div className="text w-100">
                    <h2>Welcome to login</h2>
                    <p>Don't have an account?</p>
                    <Link to="#" className="btn btn-white btn-outline-white">
                      Sign Up
                    </Link>
                  </div>
                </div>
                <div className="login-wrap p-4 p-lg-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <Link
                          to="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook"></span>
                        </Link>
                        <Link
                          to="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter"></span>
                        </Link>
                      </p>
                    </div>
                  </div>
                  <form className="signin-form" onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <label className="label" for="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e)=>handleUsernameChange(e.target.value)}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        require
                        value={password}
                        onChange={(e)=>handlePasswordChange(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="form-group d-md-flex"></div>
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

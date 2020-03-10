import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Login.sass";
import icon from "assets/img/img_avatar2.png";

import { Login } from "redux/actions";
import { Spinner } from "components/Core/Spinner";

export const LoginPage = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth);

  const login = event => {
    event.preventDefault();
    event.persist();

    const values = {
      userName: event.target.name.value,
      password: event.target.password.value
    };
    dispatch(Login(values));
  };

  return (
    <section className="login">
      <form onSubmit={login} method="post">
        <div className="imgcontainer">
          <img src={icon} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="name"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button disabled={loading}>Login</button>
          <Spinner visible={loading} />
        </div>
      </form>
    </section>
  );
};
import React, { useState } from "react";
import { Link} from "react-router-dom";


const Login = ({setAuth}) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const { email, password } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );

      const parseRes = await response.json();

      localStorage.setItem("token", parseRes.token);
      setAuth(true);

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="container__content">
          <div className="container--central ">
              <p className="heading heading--x-large">Login</p>
              <form className="form form--small" onSubmit={onSubmitForm}>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  className="form__item"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  className="form__item"
                />
                <button className="btn btn-primary">Login</button>
              </form>
              <p className="text">or</p>
              <Link to="/register" className="btn btn-primary"> Register</Link>
          </div>
                
      </div>
      {/* <h1 className="mt-5 text-center">Login</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={e => onChange(e)}
          className="form-control my-3"
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/register">Register</Link> */}
    </>
  );
};

export default Login;
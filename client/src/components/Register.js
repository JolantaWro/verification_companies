import React, { useState } from "react";
import { Link} from "react-router-dom";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: ""
  });

  const { email, password, name } = inputs;

  const onChange = e =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });


  const onSubmitForm = async e => {
    e.preventDefault();
    
    try {
      const body = { email, password, name };
      const response = await fetch(
        "http://localhost:5000/auth/register",
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
      setAuth(true)

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
        <div className="container--central">
            <p className="heading heading--x-large">Register</p>
            <form onSubmit={onSubmitForm} className="form form--bigger">
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={e => onChange(e)}
                className="form__item"
              />
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={e => onChange(e)}
                className="form__item"
              />
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={e => onChange(e)}
                className="form__item"
              />
              <button className="btn btn-primary">Register</button>
            </form>
            <p className="text">or</p>
            <Link to="/login" className="btn btn-primary">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
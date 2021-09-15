import React, { useState } from "react";
import validationForm from "./ValidationForm";
import Dropdown from "./Dropdown";

const SignInForm = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(validationForm(values));
  };
  const [selected, setSelected] = useState("I would describe my user type as");

  return (
    <div className="container">
      <div className="app-wrapper">
        <form className="form-wrapper">
          <div className="formField">
            {/* this will sort the errors in this field */}
            {errors.fullname && <p className="error"> {errors.fullname} </p>}
            <input
              className="input"
              placeholder="Your name"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            {/* this will sort the errors in this field */}
            {errors.email && <p className="error"> {errors.email} </p>}
            <input
              className="input"
              placeholder="Email address"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="formField">
            <Dropdown selected={selected} setSelected={setSelected} />
          </div>
          <div className="formField">
            {/* this will sort the errors in this field */}
            {errors.password && <p className="error"> {errors.password} </p>}
            <input
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <p className="passwordReq">Minimun 8 characters</p>
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;

import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("");
  function onSubmitHandler(e) {
    e.preventDefault();
    const response = fetch("http://localhost:3000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        name: name,
        location: location,
        email: email,
        password: password,
      }),
    })
      .then(() => {
        setname("");
        setemail("");
        setlocation("");
        setpassword("");
        alert("Data inserted Sucessfully");
      })
      .catch((e) => {
        alert(`Some Error OCcur ${e}`);
      });
  }
  const onchangeHandlerName = (e) => {
    setname(e.target.value);
  };
  const onchangeEmail = (e) => {
    setemail(e.target.value);
  };
  const onpasswordHandler = (e) => {
    setpassword(e.target.value);
  };
  const onlocation = (e) => {
    setlocation(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={onchangeHandlerName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onchangeEmail}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="example" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={location}
            onChange={onlocation}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onpasswordHandler}
          />
        </div>
        <button type="submit" className=" m-3 btn btn-primary">
          Submit
        </button>
        <Link to="/login" className="m=3 btn btn-danger">
          Alerady User
        </Link>
      </form>
    </div>
  );
};

export default Signup;

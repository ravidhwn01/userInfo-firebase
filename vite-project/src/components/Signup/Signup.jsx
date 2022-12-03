import React, { useState } from "react";
import InputControl from "../inputcontrol/InputControl";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("fill all fields");
      return;
    }
    setErrorMsg("");
    // console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log("error", e));
  };
  return (
    <div>
      <h1>Signup</h1>
      <InputControl
        onChange={(event) => {
          setValues((prev) => ({ ...prev, name: event.target.value }));
        }}
        label="Name"
        placeholder="enter your email address"
      />
      <InputControl
        onChange={(event) => {
          setValues((prev) => ({ ...prev, email: event.target.value }));
        }}
        label="Email"
        placeholder="enter your email address"
      />
      <InputControl
        onChange={(event) => {
          setValues((prev) => ({ ...prev, password: event.target.value }));
        }}
        label="Password"
        placeholder="enter Password"
      />
      <div className="btn">
        <b>{errorMsg}</b> <br />
        <button onClick={handleSubmit}>Signup</button>
        <p>
          already have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

import React, { useState } from "react";
import InputControl from "../inputcontrol/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { async } from "@firebase/util";
function Signup() {
    const navigate =  useNavigate()
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
    const [submitbtndisable, setsubmitbtndisable] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("fill all fields");
      return;
    }
    setErrorMsg("");
    setsubmitbtndisable(true);
    // console.log(values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user
        await updateProfile(user, {
            displayName: values.name
        })
        navigate("/")  // redirect to home
        console.log(user);
        // console.log(res);
      })
      .catch((e) => {
        setsubmitbtndisable(false)
        setErrorMsg(e.message);
        // console.log("error", e)});
        });
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

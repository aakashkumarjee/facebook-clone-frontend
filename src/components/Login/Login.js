import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [loginTab, setLoginTab] = useState(1);
  const PostLoginData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const PostSignupData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signupEmail,
        name: signupUsername,
        password: signupPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  // const LoginTab = () => {
  //   console.log("Login Showed");
  //   setLoginTab(1);
  // };
  // const SignUpTab = () => {
  //   console.log("Sign Up Showed");
  //   setLoginTab(0);
  // };
  return (
    <div className="login">
      <div className="login">
        <div className="login-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
            alt=""
          />
          <div className="formHeader">
            <div
              className={`formTab ${!loginTab ? "" : "selectedTab"}`}
              onClick={() => {
                setLoginTab(1);
              }}
            >
              Log In
            </div>
            <div
              className={`formTab ${loginTab ? "" : "selectedTab"}`}
              onClick={() => {
                setLoginTab(0);
              }}
            >
              Sign Up
            </div>
          </div>
          <div className={`login-form ${loginTab ? "" : "hiddenTab"}`}>
            <input
              type="text"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="login-email"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="login-password"
            />
            <Button onClick={PostLoginData}> Log In</Button>
          </div>
          <div className={`signup-form ${!loginTab ? "" : "hiddenTab"}`}>
            <input
              type="text"
              placeholder="Email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="signup-email"
            />
            <input
              type="text"
              placeholder="Username"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
              className="signup-username"
            />
            <input
              type="password"
              placeholder="Password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="signup-password"
            />
            <Button onClick={PostSignupData}> Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

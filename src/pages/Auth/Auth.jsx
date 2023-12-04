import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [Confirmpassword, setConfirmPassword] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const HandleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const ResetForm = () => {
    setConfirmPassword(true);
    setData({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    })
    console.log(data)
  };

  const HandleSubmit = (e) =>{
    e.preventDefault()
    if(isSignUp && data.password !== data.confirmPassword){
      setConfirmPassword(false)
    }
  }
  return (
    <div className="Auth">
  
      <div className="Content">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Unknown Ghost</h1>
          <h6>
            No Matter what you are and what is your color. Matter is what are
            you doing
          </h6>
        </div>
      </div>

      <div>
        <div className="SignUp">
          <form className="AuthForm" onSubmit={HandleSubmit}>
            <h3>{isSignUp ? "SignUp" : "Login"}</h3>

            {isSignUp && (
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  name="firstname"
                  className="InfoInput"
                  onChange={HandleInput}
                  value={data?.firstname}
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastname"
                  className="InfoInput"
                  onChange={HandleInput}
                  value={data?.lastname}
                />
              </div>
            )}

            <div>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="InfoInput"
                onChange={HandleInput}
                value={data?.username}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="InfoInput"
                onChange={HandleInput}
                value={data?.email}
              />
            </div>

            <div>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="InfoInput"
                onChange={HandleInput}
                value={data?.password}
              />
              {isSignUp && (
                <input
                  type="password"
                  placeholder="confirm password"
                  name="confirmPassword"
                  className="InfoInput"
                  onChange={HandleInput}
                  value={data?.confirmPassword}
                />
              )}
            </div>

            <span
              style={{
                display: Confirmpassword ? "none" : "block",
                alignSelf: "flex-end",
                marginRight: "5px",
                color: "red",
                fontSize: "12px",
              }}
            >
              * Confirm Password is not correct
            </span>

            <div>
              <span
                style={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => {
                  setIsSignUp((pre) => !pre);
                  ResetForm();
                }}
              >
                {" "}
                {isSignUp
                  ? "Already Have an Account LOGIN"
                  : "Don't Have an account Signup"}
              </span>
            </div>

            <button className="button infoButton" type="submit">
              {isSignUp ? "SignUp" : "Login"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
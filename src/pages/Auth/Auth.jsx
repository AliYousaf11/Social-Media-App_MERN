import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png"

const Auth = () => {
  return (
    <div className="Auth">
      <div className="Content">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZDK Media</h1>
          <h6>
            No Matter what you are and what is your color. Matter is what are
            you doing
          </h6>
        </div>
      </div>
      <div>
      {/* <SignUp/> */}
      <Login/>
      </div>
    </div>
  );
};

function Login(){
  return (
    <div className="SignUp">
      <form className="AuthForm">

      <h3>Login</h3>
      <div>
        <input type="text" placeholder="Username" name="username" className="InfoInput"/>
        <input type="text" placeholder="Email" name="email" className="InfoInput"/>
      </div>

      <div>
        <span style={{fontSize:"12px"}}>Don't Have an account Signup</span>
      </div>
      <button className="button infoButton" type="submit">Login</button>
      </form>
    </div>
  )
}


function SignUp(){
  return (
    <div className="SignUp">
      <form className="AuthForm">

      <h3>SignUp</h3>
      <div>
        <input type="text" placeholder="First name" name="firstname" className="InfoInput"/>
        <input type="text" placeholder="Last name" name="lastname" className="InfoInput"/>
      </div>

      <div>
        <input type="text" placeholder="Email" name="email" className="InfoInput"/>
      </div>
      
      <div>
        <input type="text" placeholder="password" name="password" className="InfoInput"/>
        <input type="text" placeholder="confirm password" name="confirmpassword" className="InfoInput"/>
      </div>

      <div>
        <span style={{fontSize:"12px"}}>Already Have an Account LOGIN</span>
      </div>
      <button className="button infoButton" type="submit">SignUp</button>
      </form>
    </div>
  )
}

export default Auth;

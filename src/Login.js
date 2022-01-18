import React from "react";
import "./login.css";

const Login = () => {
  const login = () => {};
  const register = () => {};
  return (
    <div className="login">
      <img src="" alt="" />
      <form>
        <input type="text" placeholder="Full name (Required)" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="(Required)" />
        <input type="file" name="" id="" />
        <button onClick={login} type="submit" on>
          {" "}
          Sign In{" "}
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;

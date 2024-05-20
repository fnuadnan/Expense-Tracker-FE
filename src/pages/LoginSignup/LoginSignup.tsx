import "./LoginSignup.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";
import { IUserLogin } from "../../entities/IUser";
import useAuth from "../../hooks/useAuth";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  const { register, handleSubmit } = useForm<IUserLogin>();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: IUserLogin) => {
    const success = await login(data);
    if (success) {
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
              id="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              id="password"
              {...register("password", { required: true })}
            />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}
        <div className="d-flex justify-content-center">
          <button className="button mt-3">Submit</button>
        </div>
        <div className="submit-container">
          <div
            className={action === "Sign Up" ? "submit" : "submit gray"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit" : "submit gray"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
      {/* Continue Without Login Link */}
      <Link to="/continue" className="btn btn-link">
        Continue without login
      </Link>
    </form>
  );
};

export default LoginSignup;

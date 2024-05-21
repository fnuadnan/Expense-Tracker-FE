import "./LoginSignup.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import user_icon from "../../assets/person.png";
import { IUserLogin, IUserSignUp } from "../../entities/IUser";
import useAuth from "../../hooks/useAuth";
import useSignUp from "../../hooks/useSignUp";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  const { register, handleSubmit, reset } = useForm<IUserLogin | IUserSignUp>();
  const { login } = useAuth();
  const { signup } = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async (data: IUserLogin | IUserSignUp) => {
    let success = false;
    if (action === "Login") {
      success = await login(data as IUserLogin);
      if (success) {
        navigate("/login");
      }
    } else {
      success = await signup(data as IUserSignUp);
      if (success) {
        navigate("/signup");
      }
    }
  };

  const handleActionChange = (newAction: string) => {
    setAction(newAction);
    reset(); // Reset the form fields when changing actions
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
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: action === "Sign Up" })}
              />
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
              handleActionChange("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Login" ? "submit" : "submit gray"}
            onClick={() => {
              handleActionChange("Login");
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

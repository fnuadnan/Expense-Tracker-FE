import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { IUserLogin } from "../entities/IUser";
import useAuth from "../hooks/useAuth";

const WelcomePage = () => {
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
    <div className="welcome-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>

        {/* Password Input */}
        <div className="form-group mb-2">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>

        {/* Login Button */}
        <button className="btn btn-primary me-3">Login</button>
      </form>

      {/* Continue Without Login Link */}
      <Link to="/continue" className="btn btn-link">
        Continue without login
      </Link>
    </div>
  );
};
export default WelcomePage;

// zod validation
// output the errrors
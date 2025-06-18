import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="signup__root-container">
      <h1 className="signup__title">Sign Up</h1>
      <div className="signup__subtitle">
        Are you a new member?
        <span>
          <Link to="/sign-up" style={{ color: "#2190ff" }}>
            {" "}
            Sign Up Here
          </Link>
        </span>
      </div>
      <form className="signup-form">
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-control"
            placeholder="Enter your email"
            aria-describedby="helpId"
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            name="password"
            id="password"
            required
            className="form-control"
            placeholder="Enter your password"
            aria-describedby="helpId"
          />
        </div>

        <div className="btn-group">
          <button
            type="reset"
            className="btn btn-danger mb-2 waves-effect waves-light"
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

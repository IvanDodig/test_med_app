import { Link } from "react-router-dom";
import "./Sign_Up.css";
const SignUp = () => {
  return (
    <div className="signup__root-container">
      <h1 className="signup__title">Sign Up</h1>
      <div className="signup__subtitle">
        Already a member?{" "}
        <Link to="/login" style={{ color: "#2190ff" }}>
          Login
        </Link>
      </div>
      <form className="signup-form">
        <div className="form-group">
          <label for="role">Role</label>
          <select
            name="role"
            id="role"
            required
            className="form-control"
            placeholder="Select role"
            ariaDescribedby="helpId"
          >
            <option value="">Select Role</option>
            <option value="dog">Doctor</option>
            <option value="cat">Patient</option>
          </select>
        </div>
        <div className="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="form-control"
            placeholder="Enter your name"
            ariaDescribedby="helpId"
          />
        </div>

        <div className="form-group">
          <label for="phone">Phone</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="form-control"
            placeholder="Enter your phone number"
            aria-describedby="helpId"
            pattern="\d{10}"
            maxLength={10}
            minLength={10}
            title="Phone number must be exactly 10 digits"
          />
        </div>

        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="form-control"
            placeholder="Enter your email"
            ariaDescribedby="helpId"
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
            ariaDescribedby="helpId"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;

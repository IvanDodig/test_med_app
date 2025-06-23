import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await res.json();
    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);

      navigate("/");
      window.location.reload();
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

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
      <form className="signup-form" onSubmit={login}>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
            placeholder="Enter your email"
            aria-describedby="helpId"
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

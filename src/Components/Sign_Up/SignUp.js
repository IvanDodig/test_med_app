import { Link, useNavigate } from "react-router-dom";
import "./Sign_Up.css";
import { useState } from "react";
import { API_URL } from "../../config";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone: phone,
      }),
    });
    const json = await response.json();
    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);
      navigate("/");
      window.location.reload();
    } else {
      if (json.errors) {
        for (const error of json.errors) {
          setShowerr(error.msg);
        }
      } else {
        setShowerr(json.error);
      }
    }
  };

  return (
    <div className="signup__root-container">
      <h1 className="signup__title">Sign Up</h1>
      <div className="signup__subtitle">
        Already a member?{" "}
        <Link to="/login" style={{ color: "#2190ff" }}>
          Login
        </Link>
      </div>
      <form className="signup-form" method="POST" onSubmit={register}>
        {/* <div className="form-group">
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
        </div> */}
        <div className="form-group">
          <label for="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
            required
            className="form-control"
            placeholder="Enter your email"
            ariaDescribedby="helpId"
          />
          {showerr && (
            <div className="err" style={{ color: "red" }}>
              {showerr}
            </div>
          )}
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
            type="password"
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

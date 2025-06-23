import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    // remove email phone
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);
    setUsername("");

    // Remove the reviewFormData from local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("reviewFormData_")) {
        localStorage.removeItem(key);
      }
    }
    setEmail("");
    window.location.reload();
  };

  useEffect(() => {
    const storedemail = sessionStorage.getItem("email");

    if (storedemail) {
      setIsLoggedIn(true);
      setUsername(storedemail);
    }
  }, []);

  return (
    <nav className="nav__root">
      <div className="nav__section">
        <a href="/" className="nav__logo">
          {" "}
          StayHealthy{" "}
        </a>
      </div>
      <div className="nav__section">
        {/* <div className="nav__icon" onClick="{handleClick}">
          <i className="fa fa-times fa fa-bars"></i>
        </div>  */}

        <ul className="nav__links active">
          <li className="nav__link">
            <a href="../Landing_Page/LandingPage.html">Home</a>
          </li>
          <li className="nav__link">
            <Link to="/booking-consultation">Appointments</Link>
          </li>
          {isLoggedIn ? (
            <>
              <Dropdown title={` Welcome, ${username?.split("@")?.[0]}`}>
                <Link to="/profile" className="dropdown-link">
                  Your profile
                </Link>
                <Link to="/reports" className="dropdown-link">
                  Your reports
                </Link>
              </Dropdown>
              <li className="nav__link">
                <button className="nav__button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="nav__link">
                <Link to="/sign-up">
                  <button className="nav__button">Sign Up</button>
                </Link>
              </li>
              <li className="nav__link">
                <Link to="/login">
                  <button className="nav__button">Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <li className="nav__link" onClick={() => setIsOpen((x) => !x)}>
        {title}
      </li>
      <div
        className="dropdown-content"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {children}
      </div>
    </div>
  );
};

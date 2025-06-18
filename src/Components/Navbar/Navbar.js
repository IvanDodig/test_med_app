import "./Navbar.css";

const Navbar = () => {
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
            <a href="#">Appointments</a>
          </li>
          <li className="nav__link">
            <a href="../Sign_Up//Sign_Up.html">
              <button className="nav__button">Sign Up</button>
            </a>
          </li>
          <li className="nav__link">
            <a href="../Login/Login.html">
              <button className="nav__button">Login</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import ("./navbar.css");

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import AuthContext from "../../../contexts/auth.context";

// const renderNavLinkActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Navbar() {
  // const { user, doLogout } = useContext(AuthContext);

  return (
    <nav className="main-navbar navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">Speakeasy Shh! | </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">Usuario</li>
          </ul>
        </div>
        <div>
          Ubicación
        </div>
        <div>
          Logout
        </div>
      </div>
    </nav>
  );
}
export default Navbar;


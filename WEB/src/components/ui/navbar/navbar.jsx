import ("./navbar.css");
import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/auth.context";

// import { Logo } from "../../../../public/images/logo.jpg";
// const renderNavLinkActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Navbar() {
const context = useContext(AuthContext);

  return (

    <nav className="main-navbar navbar-expand-lg ">
      <ul className="nav-container">
        <li>Ubicación:</li>
        <li>Nombre de usuario: {context.user?.name}</li>
        <li>{context.user && (
              <button onClick={context.doLogout} className="btn btn-sm btn-danger btn-color">Cerrar sesión</button>
            )}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

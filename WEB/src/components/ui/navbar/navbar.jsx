import ("./navbar.css");
import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/auth.context";

// import { Logo } from "../../../../public/images/logo.jpg";
// const renderNavLinkActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Navbar() {
const context = useContext(AuthContext);

const logo = "https://res.cloudinary.com/dmzanxy93/image/upload/v1715415641/logoSpeak_gqn0d0.png"

  return (

    <header className="header">

     {/* logo de la web */}
     <div className="logo-container">
       <img className="logo"  src={ logo } alt="logo" />
     </div>

      {/* links de navegación */}
      <nav className="main-navbar navbar-expand-lg ">
        <ul className="nav-container">
          <li>
            <a href="/">Ubicación</a>
          </li>
          <li>
            <a href="/"> {context.user?.name}</a>
          </li>
          <li>
            {context.user && (
              <button onClick={context.doLogout} className="btn btn-sm btn-danger">Cerrar sesión</button>
            )}
          </li>
        </ul>
      </nav>


   </header>
  );
}
export default Navbar;

import ("./navbar.css");
import { useContext } from "react";
// import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/auth.context";

// import { Logo } from "../../../../public/images/logo.jpg";
// const renderNavLinkActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Navbar() {
const { user, doLogout } = useContext(AuthContext);

const logo = "https://res.cloudinary.com/dmzanxy93/image/upload/v1715415641/logoSpeak_gqn0d0.png"

  return (

    <header className="header">

     {/* logo de la web */}
     <div className="logo-container">
       <img src={ logo } alt="logo" />
     </div>

      {/* links de navegación */}
      <nav className="main-navbar navbar-expand-lg ">
        <ul className="nav-container">
          <li>
            <a href="/"> {user?.name}</a>
          </li>
          <li>
            <a href="/">Ubicación</a>
          </li>
          <li>
            <a href="/">Logout</a>
          </li>
        </ul>
      </nav>


   </header>
  );
}
export default Navbar;

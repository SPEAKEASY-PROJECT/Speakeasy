import ("./navbar.css");
import { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/auth.context";
import Timer from '../../timer/timer';

// import { Logo } from "../../../../public/images/logo.jpg";
// const renderNavLinkActive = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

function Navbar() {
const context = useContext(AuthContext);

const [showTimer, setShowTimer] = useState(false);

return (
    

    <nav className="main-navbar navbar-expand-lg ">
      <ul className="nav-container">
        <li>Ubicación:</li>
        <li>¿Cómo estás? {context.user?.name}</li>

        <li>{context.user && (
              <button onClick={context.doLogout} className="btn btn-sm btn-danger btn-color">Cerrar sesión</button>
            )}
        </li>
      </ul>

      <div>{showTimer && <Timer />} 
        <button className='timer' onClick={() => {setShowTimer(!showTimer);
          }}> <p>Tiempo restante</p></button>
      </div>

    </nav>
    
  );
}
export default Navbar;

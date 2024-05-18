import ("./navbar.css");
import { useContext, useState } from "react";
import AuthContext from "../../../contexts/auth.context";
import Timer from '../../timer/timer';

function Navbar() {
const { user, doLogout } = useContext(AuthContext);

return (
    

    <nav className="main-navbar navbar-expand-lg ">
      <ul className="nav-container">
        {/* <li>Ubicación:{context.user?.</li> */}
        <li>¿Cómo estás? {user?.name}</li>
        <li>{user && (
              <button onClick={doLogout} className="btn btn-sm btn-danger btn-color">Cerrar sesión</button>
            )}
        </li>
      </ul>
      <div>{!user && <Timer />} 
        
      </div>
    </nav>
    
  );
}
export default Navbar;

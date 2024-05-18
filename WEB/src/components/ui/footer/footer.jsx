import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fmt-auto pt-3 text-center footer bg-dark text-white">
      
      {/* Grid column directories */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <p>Site MAP</p>
        <ul className="siteMap">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/playlist">Playlist</Link></li>
          <li><Link to="/locals">Locales</Link></li>
          <li><Link to="/events">Eventos</Link></li>
          <li><Link to="/comunity">Comunidad</Link></li>
        </ul>
      </div>
      

      {/* Grid column Contact */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Encuentranos en:</h6>
        <p><i className="fas fa-envelope me-3"></i> SpeakEasyShh@speak.com</p>
        <p><i className="fas fa-phone me-3"></i> 900401850</p>
        <p><i className="bi bi-whatsapp me-3"></i> +34 600578453</p>
      </div>

      <div className="mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Locales</h6>
        <p>Unete a nuestra red de Locales (information)</p>
        <p>Registro de Locales</p>
      </div>

      <div className="container text-center mb-4">
        <span className="fst-italic fs-5">@ 2024 SpeakEasy Shh by Marta Bravo & Josep Lorente Copyright</span>
      </div>

    <section className="d-flex flex-wrap justify-content-evenly align-items-center p-4">
        <div className="d-flex justify-content-around align-items-center mb-3">
          <h4 className="me-3 text-dark fw-bold"><u>Marta Bravo</u></h4>
          <a href="https://www.linkedin.com/in/marta-bravo-su%C3%A1rez-3272b710a/" className="me-4 text-dark">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/martabs92" className="me-4 text-dark">
            <i className="fab fa-github"></i>
          </a>
        </div>
  
        <div className="d-flex justify-content-around align-items-center mb-3">
          <h4 className="me-3 text-dark fw-bold"><u>Josep Lorente</u></h4>
          <a href="https://www.linkedin.com/in/josep-lorente/" className="me-4 text-dark">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/joseplorente" className="me-4 text-dark">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
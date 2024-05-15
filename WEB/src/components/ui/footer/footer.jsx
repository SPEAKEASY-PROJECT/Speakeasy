import "./footer.css";

function Footer() {
  return (
    <footer className="fmt-auto pt-3 text-center footer bg-dark text-white">
      
      {/* Grid column directories */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <p><a href="/home" className="text-reset">Home</a></p>
        <p><a href="/playlist" className="text-reset">Playlist</a></p>
        <p><a href="/comunity" className="text-reset">Comunidad</a></p>
      </div>

      {/* Grid column Contact */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Encuentranos en:</h6>
        <p><i className="fas fa-envelope me-3"></i> SpeakEasyShh@contactme.com</p>
        <p><i className="fas fa-phone me-3"></i> 900401850</p>
        <p><i className="bi bi-whatsapp me-3"></i> +34 600578453</p>
      </div>

      {/* Grid column Locals
      <div className="mb-4">
        <h6 className="text-uppercase fw-bold mb-4">Locales</h6>
        <p>Locales information here</p>
      </div> */}

      <div className="container text-center mb-4">
        <span className="fst-italic fs-5">@ 2024 SpeakEasy Shh by Marta Bravo & Josep Lorente Copyright</span>
      </div>


      {/* Section: Social media */}

      <section className="d-flex flex-wrap justify-content-evenly align-items-center p-4">
        {/* Marta Bravo */}
        <div className="d-flex justify-content-around align-items-center mb-3">
          <h4 className="me-3 text-dark fw-bold"><u>Marta Bravo</u></h4>
          <a href="https://www.linkedin.com/in/marta-bravo-su%C3%A1rez-3272b710a/" className="me-4 text-dark">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/martabs92" className="me-4 text-dark">
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Josep Lorente */}
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
import ("./footer.css");

function Footer() {

  return (
    <footer className="fmt-auto pt-3 text-center text-lg-start bg-body-tertiary text-dark fw-bold bgFooter">
      
      
      <div className="container text-center">
        <span className="text-light">SpeakeasyShh web</span>
      </div>


     {/* Grid column Map */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4">
         MAPA
        </h6>
        <p>
          {/* <a href="" className="text-reset">Band-Jam</a> */}
        </p>
        <p>
          {/* <a href="/formarbanda" className="text-reset">Formar Banda</a>                                 tiene que ir con el navigate */}
        </p>
        <p>
          {/* <a href="/anunciatuconcierto" className="text-reset">Anuncia tu concierto</a> */}
        </p>
         </div>

         {/* <!-- Grid column Contact--> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
        <h6 className="text-uppercase fw-bold mb-4">Contáctanos</h6>
          <p>
            <i className="fas fa-home me-3"></i> P.º de la Castellana, 259, Fuencarral-El Pardo, 28046 Madrid</p>
           <p>
            <i className="fas fa-envelope me-3"></i>
             SpeakeasyShh@contact.com
          </p>
          <p>
            <i className="fas fa-phone me-3"></i> 900 00 00 00</p>
          <p>
            <i className="bi bi-whatsapp me-3"></i> +34 60 00 00 000</p>
         </div>
        
        {/* <!-- Grid column Locals--> */}
      <div>
        Locales
      </div>

      {/* Section: Social media  */}
      <section class="d-flex flex-wrap justify-content-evenly align-items-center p-4"></section>

      {/* Right  */}
      <div className="d-flex justify-content-around align-itmes-center">
        <h4 className="me-3 text-dark fw-bold"><u>Marta Bravo</u></h4>
         <a href="https://www.linkedin.com/in/marta-bravo-su%C3%A1rez-3272b710a/" className="me-4 text-dark">
           <i className="fab fa-linkedin"></i>
         </a>
         <a href="https://github.com/martabs92" className="me-4 text-dark">
           <i className="fab fa-github"></i>
         </a>
      </div>

      {/* Left  */}
      <div className="d-flex justify-content-around align-itmes-center">
        <h4 className="me-3 text-dark fw-bold"><u>Josep Lorente</u></h4>
          <a href="" className="me-4 text-dark">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-dark">
            <i className="fab fa-github"></i>
          </a>
      </div>




    </footer>
  )
}


     
//   <!-- Copyright -->
//   <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
//     © 2024 IRONMUSIC by Fajersztejn & Bravo Copyright:
//     <a class="text-reset fw-bold" href="https://mdbootstrap.com/">ironmusic.com</a>
//   </div>
//   <!-- Copyright -->
// </footer>
// <!-- Footer -->




export default Footer;
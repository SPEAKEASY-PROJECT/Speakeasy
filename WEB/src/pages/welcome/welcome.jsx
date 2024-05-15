import './welcome.css';

function Welcome() {

//   let age = Number(document.querySelector("#age")).value;
// console.log(age); 

// if (age >= 18) {  

// window.location.href = "/register"
// } else {
//         alert("Lo siento no puedes ingresar a esta pagina, eres menor de edad!");
//         window.location.href ="https://www.google.com.ar"
// }  


    return (
      <div id="popUpsContainer">
        <div className="popUp">
            <div className="fondoPop">
              <img src='https://res.cloudinary.com/dmzanxy93/image/upload/v1715415906/gansterUno_yybb5a.jpg' alt="Gangster abriendo una puerta" />
              <div className='textPop'><p className='textComic'>eh! ¿tienes edad para entrar aquí?</p></div>
              <input className="inputPop" id="age" type="number" name="age" placeholder="escribe tu edad"></input>
              <button className="age " type="button" ><a href="/intro">E n t r a r</a></button>
              </div>
          </div>
      </div>
  )
}

export default Welcome;
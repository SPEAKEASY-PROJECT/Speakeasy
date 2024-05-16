import './welcome.css';
import { useState } from 'react';

function Welcome() {

  const [age, setAge] = useState('');

  const handleAgeChange = (e) => {
    setAge(Number(e.target.value));
  };

  const handleRedirect = () => {
    if (age >= 18) {
      window.location.href = "/intro";
    } else {
      alert("Lo siento no puedes ingresar a esta página, eres menor de edad!");
      window.location.href = "https://www.google.com.ar";
    }
  };

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
              <input className='inputPop' type="number" id="age" value={age} onChange={handleAgeChange} placeholder="escribe tu edad" />
              <button className='age' onClick={handleRedirect}>E n t r a r</button>
            </div>
          </div>
      </div>
  )
}

export default Welcome;


<<<<<<< HEAD
=======


  

  

  


>>>>>>> 4f5db073c56ba3f8c65812dd516629c751f4e795

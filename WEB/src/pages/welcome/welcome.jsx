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
             <img src='https://res.cloudinary.com/dmzanxy93/image/upload/v1715415906/gansterUno_yybb5a.jpg' alt="ganster abriendo una puerta" />
             <p className='textPop'>eh! ¿tienes edad para entrar aquí?</p>
             <input className="age" id="age" type="number" name="edad" placeholder="escribe tu edad"></input>
             <button className="bt bt-sm" type="button" ><a href="/register">Entrar</a></button>
            </div>
        </div>
    </div>
  )
}

export default Welcome;
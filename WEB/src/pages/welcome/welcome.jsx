import './welcome.css';

function Welcome() {

//   let edad = Number(document.querySelector("#mayordeEdad")).value;
// console.log(edad); 

// if (edad >= 18) {  
 
// window.location.href = "/pages/registro.html"
// } else {
//        alert("Lo siento no puedes ingresar a esta pagina, eres menor de edad!");
//        window.location.href ="https://www.google.com.ar"
// }  


  return (
    <div id="popUpsContainer">
       <div className="popUp">
           <div className="fondoPop">
             <img src='https://res.cloudinary.com/dmzanxy93/image/upload/v1715415906/gansterUno_yybb5a.jpg' alt="ganster abriendo una puerta" />
             <button className="textPop" type="button" ><a href="/register">tienes edad para estar aqui?</a></button>
            </div>
        </div>
    </div>
  )
}

export default Welcome;
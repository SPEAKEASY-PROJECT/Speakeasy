import './welcome.css';
//import {  imagenGanster } from '../../../images/logo.jpg';

function Welcome() {

  return (
    <div>
      HOLA

      
      <div id="popUpsContainer">
        <div className="popUp">
            <div className="fondoPop">
              <img src='https://res.cloudinary.com/dmzanxy93/image/upload/v1715415641/logoSpeak_gqn0d0.png' alt="ganster abriendo una puerta" />
                    <button className="textPop" type="button" ><a href="/register">tienes edad para estar aqui?</a></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Welcome;
import ('./home.css');
// import {imagenGanster } from '../../images/gansterUno.jpg';

function Home() {
  return (
    <div>
      <div id="popUpsContainer">
        <div className="popUp">
            <div className="fondoPop">
              {/* <img src={ imagenGanster } alt="ganster abriendo una puerta" /> */}
                    <button className="textPop" type="button" ><a href="./register.html">tienes edad para estar aqui?</a></button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
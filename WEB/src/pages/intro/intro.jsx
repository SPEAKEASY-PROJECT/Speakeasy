import './intro.css';


function Intro() {
  return (
      
    <div id='intro'>
        <div className="popUp">
            <div className="fondoPop">
            <img src='https://res.cloudinary.com/dmzanxy93/image/upload/v1715415905/gansterDos_pdizyv.jpg' alt="Gangster abriendo una puerta" />
      </div>
      <div>
        <p className='texto fs-2'>
            Bienvenido, elige cómo quieres acceder:
        </p>
        <p className='texto fs-5'>
            Entrando como invitado puedes disfrutar de 20 minutos para recorrer algunas de las funcionalidades de la web, sin embargo te invitamos a que te registres para descubrir al 100% SpeakEasy, y . . .  recuerda Shh!
        </p>
      </div>
      <div className='button-container'>
        <button type='submit' className='btn btn-outline-secondary btn-lg'>
          <a href='/homeGuest'>Acceder como invitado</a>
        </button>
        <button type='submit' className='btn btn-outline-primary btn-lg'>
          <a href='/login'>Acceder a mi usuario</a>
        </button>
        <button type='submit' className='btn btn-warning btn-lg'>
          <a href='/register'>Registrarme</a>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Intro;
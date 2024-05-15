import './intro.css';


function Intro() {
  return (
      
    <div id='intro'>
        <div className="popUp">
            <div className="fondoPop">
            <img src='https://res.cloudinary.com/dmzanxy93/image/upload/v1715415905/gansterDos_pdizyv.jpg' alt="Gangster abriendo una puerta" />
      </div>
      <div className='button-container'>
        <button type='submit' className='btn btn-outline-secondary btn-lg'>
          <a href='/homeGuest'>Acceder como invitado</a>
        </button>
        <button type='submit' className='btn btn-outline-primary btn-lg'>
          <a href='/login'>Ingresa con tu LOGIN</a>
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
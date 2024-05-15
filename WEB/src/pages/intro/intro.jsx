import './intro.css';
import BaseComponents from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '../../../public/images/gansterDos.jpg'

function Intro() {
  return (
    <BaseComponents backgroundImage={backgroundImage} className='intro'>
      <div className='button-container'>
        <button type='submit' className='btn btn-outline-secondary btn-lg'>
          <a href='/homeGuest'>Acceder como invitado</a>
        </button>
        <button type='submit' className='btn btn-outline-primary btn-lg'>
          <a href='/login'>Acceder a mi perfil</a>
        </button>
        <button type='submit' className='btn btn-warning btn-lg'>
          <a href='/register'>Registrarme</a>
        </button>
      </div>
    </BaseComponents>
  );
}

export default Intro;
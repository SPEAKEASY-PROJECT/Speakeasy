import './comunity.css';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/chatComunidad.jpg';
import Chat from '../../components/chat/chat';


function Comunity() {


  return (
    <>
      <BaseComponent backgroundImage={backgroundImage}>
        <div>
          <p className='comunity'>NUESTRA COMUNIDAD</p>
          <div>
          <p className='text-comunity' >¡Únete a nuestra exclusiva comunidad y sumérgete en conversaciones animadas donde poder compartir
          tus experiencias, conocer a otros entusiastas de la época y disfrutar de la compañía
          en nuestro elegante salón virtual.</p></div>
        </div>
        <Chat />
      </BaseComponent>
    </>
  )
}

export default Comunity;
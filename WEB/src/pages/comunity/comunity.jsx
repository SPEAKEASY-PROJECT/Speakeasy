import './comunity.css';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/chatComunidad.jpg';
import Chat from '../../components/chat/chat';


function Comunity() {


  return (
    <>
   <p>¡Únete a nuestra exclusiva comunidad y sumérgete en conversaciones animadas donde poder compartir
     tus experiencias, conocer a otros entusiastas de la época y disfrutar de la compañía
      en nuestro elegante salón virtual."</p>
      <BaseComponent backgroundImage={backgroundImage} />
      <Chat />
    </>
  )
}

export default Comunity;
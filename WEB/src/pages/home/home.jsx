import './home.css';
import BaseComponents from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/fondoHall.jpg';



function Home() {

  return (
    <>
      <BaseComponents backgroundImage={backgroundImage}>
        <div className='home'>
          <p className='title-home'>QUE ES Y COMO FUNCIONA SPEAKEASY SHHH</p>
        <p className='text-home'><strong>Adelante</strong>, pasa y ¡Adéntrate en nuestro exclusivo enclave inspirado en los bares SpeakEasy 
      del Chicago de los 30! 
        <br />
        <br />Descubre nuestra selección de bebidas y aperitivos que ofrecemos en Locales, 
      mientras disfrutas de la mejor selección musical de nuestra playlist vintage. 
      Mantente al tanto de los eventos especiales que reviven la esencia de la década de los 30 y 
      únete a nuestra apasionada comunidad de amantes del jazz y la cultura de la época.
      <br />
      <br />
      ¡Bienvenido a un viaje en el tiempo donde la elegancia y el misterio se fusionan en cada 
      rincón de nuestro concepto de SpeakEasyShhh! </p>
        </div>

      </BaseComponents >
    </>
  )
}

export default Home;




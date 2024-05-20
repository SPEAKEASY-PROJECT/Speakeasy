import './events.css'

import backgroundImage from '/images/eventos.jpg';
import BaseComponents from '../../components/ui/baseComponents/baseComponents';




function Events() {
    return (
        <>
        <BaseComponents backgroundImage={backgroundImage}>
            <div className='events-title'>
            <p>EVENTOS ON-LINE Y OFF-LINE </p>
            </div>
             <div className='text-events'><p>¡Prepárate porque próximamente podrás vivir momentos inolvidables en nuestros exclusivos 
                      eventos temáticos inspirados en los años 30 de Chicago! 
                <br />
                <br />Desde extravagantes fiestas de Gatsby hasta emocionantes noches de casino, nuestra 
                      programación de eventos te transportará a la época 
                      dorada del jazz y la elegancia.
                <br />
                <br />Baila al ritmo de la música en vivo, saborea cocktails artesanales y sumérgete 
                      en la magia de una era llena de sofisticación y glamour.
                <br />
                <br />       
                      ¡No te pierdas la oportunidad de ser parte de nuestras memorables veladas!</p>
             </div>
            <div className='eventos-tipos'> 
                <span className='texto-tipos'>EVENTOS ON LINE</span><span className='texto-tiposInau'>GRAN INAUGURACIÓN </span>
            <div className='directos'>
             <div className='text-events2' id="live"><div id="imagenVivo"></div>
              <div id="youTube">Eventos en Nuestro Canal<div id="videos"><iframe width="500" height="250" src="https://www.youtube.com/embed/nq_HJQibpuI?si=FdTY74Q46DWS8uFF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></div>
                           
            <div className='text-events3'>
                <p>Gran inauguración en MADRID</p>
                <img style={{width: '25rem'}} src='https://media.istockphoto.com/id/1371095884/es/foto/croupier-tiene-cartas-de-p%C3%B3quer-en-sus-manos-en-una-mesa-en-un-casino.jpg?s=612x612&w=0&k=20&c=dmlTRbxOUB1RRp6i6eCEzS5h9Rl8zU81zml-no7X-Ho=' alt='Imágen ruleta de casino' />
            </div>
          </div>
          </div>
          
    
        
        </BaseComponents>
        </>
    )
}

export default Events;


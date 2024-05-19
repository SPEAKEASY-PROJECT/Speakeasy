import './events.css'

import backgroundImage from '/images/eventos.jpg';
import BaseComponents from '../../components/ui/baseComponents/baseComponents';




function Events() {
    return (
        <>
        <BaseComponents backgroundImage={backgroundImage} />
            <p>¡Prepárate porque próximamente podrás vivir momentos inolvidables en nuestros exclusivos 
                eventos temáticos inspirados en los años 30 de Chicago! Desde extravagantes fiestas de Gatsby 
                hasta emocionantes noches de casino, nuestra programación de eventos te transportará a la época 
                dorada del jazz y la elegancia. Baila al ritmo de la música en vivo, saborea cocktails 
                artesanales y sumérgete en la magia de una era llena de sofisticación y glamour. 
                ¡No te pierdas la oportunidad de ser parte de nuestras memorables veladas!."</p>
        </>
    )
    }

export default Events;


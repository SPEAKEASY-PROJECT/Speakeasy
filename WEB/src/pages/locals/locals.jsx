import './locals.css';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/barraBar.jpg';
import { useState, useEffect } from 'react';
import { getListLocals } from '../../services/api.service';
import { Link } from 'react-router-dom';


function Locals() {
    const [locals, setLocals] = useState(null);
    // const { navigate } = useNavigate()


    // const handleClick = (id) => {
    //   onClickLocals = async (id) => {
    //   navigate(`/locals/${id}`)
    // };



    useEffect(() => {
      getListLocals().then((response) => {
            setLocals(response.data)
            });
}, []);

    if (!locals) {
        return<div>Lo siento, no tienes acceso! Debes registrarte en la web para disfrutar de esta funcionalidad.</div>
    }

  return (
    // <div><pre>{JSON.stringify(locals, null, 2)}</pre></div>
    <>
      <BaseComponent backgroundImage={backgroundImage} >
        <div className='container py-2 fondo-locals'>
          <p className='text-location'><strong>Tu estas en: Madrid</strong></p>
          <p className='text-location'>Estos son los locales en cerca tuyo:</p>
        </div>
        <div className="container py-5 locals">
            <div className="row row-cols-1 row-cols-md-2 g-4 gap-4">
              {locals && locals?.map((local) => (
                <div className="card g-2" style={{ width: '14rem' }} key={local.id} >
                  <div className="card-body">
                    <h5 className="card-title">{local.name}</h5>
                    <p className="card-title">Musica : {local.style}</p>
                    <div className="card" style={{ width: '10rem' }} key={local.id}>
                      <img src={local.image}  style={{ height: '8rem' }} className="card-img-top" alt="Imágenes de locales" />
                    </div>
                    <Link to={`/locals/${local.id}`} className="btn btn-primary">Ver el local</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BaseComponent>
    </>
  )
}

export default Locals;
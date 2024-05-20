import { useState, useEffect } from 'react';
import BaseComponent from '../../../components/ui/baseComponents/baseComponents';
import { useParams } from 'react-router-dom'
import { getSelectedLocal } from '../../../services/api.service';
import backgroundImage from '/images/locales.jpg';
import ItemList from '../../../components/items/itemList/itemList';

function SelectedLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState()
  useEffect(() => {
    getSelectedLocal(id)
      .then(response => setLocal(response.data))
      .catch(error => console.error(error))
  },[])

  return (
        <BaseComponent backgroundImage={backgroundImage} >
           <div className='container py-5 locals'>
              <div className="card g-2" style={{ width: '16rem' }} key={local?.id} >
                  <div className="card-body">
                    <h5 className="card-title">{local?.name}</h5>
                    <p className="card-title">Musica : {local?.style}</p>
                    <div className="card" style={{ width: '10rem' }} key={local?.id}>
                      <img src={local?.image}  style={{ height: '8rem' }} className="card-img-top" alt="Imágenes de locales" />
                    </div>
                  </div>
              </div>
            
            <ItemList />
            </div>
      </ BaseComponent >
  )
}

export default SelectedLocal;
import React, { useState, useEffect } from 'react';
import BaseComponent from '../../../components/ui/baseComponents/baseComponents';
import { useParams } from 'react-router-dom'
import { getSelectedLocal } from '../../../services/api.service';
import backgroundImage from '/images/locales.jpg';

function SelectedLocal() {
  const { id } = useParams();
  const [local, setLocal] = useState()
  useEffect(() => {
    getSelectedLocal(id)
      .then(response => setLocal(response.data))
      .catch(error => console.error(error))
  },[])

  return (
    <div>
       <BaseComponent backgroundImage={backgroundImage} >


        <p>{local?.name}</p>
        
      </ BaseComponent >


    </div>
  )
}

export default SelectedLocal;
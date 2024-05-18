import './playlist.css';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/playlist.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getArtists } from '../../services/api.service';



function Playlist() {

  const [search, setSearch] = useState('');
  const [artists, setArtists ] = useState([])
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search.trim()) {
      // Navega a la ruta /artist-search con el parámetro de búsqueda
      //navigate(`/artist-search?search=${encodeURIComponent(search)}`);
      try {
        const { data } = await getArtists(search);
        setArtists(data)
      } catch(error){
        console.error(error)
      }
    }
  };



  return (
    <>
      <BaseComponent backgroundImage={backgroundImage} >

      {/* <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-2 g-4 gap-4">
        <audio controls>
          <source src="https://p.scdn.co/mp3-preview/0cd36d02d2474520294b4f4247b9acc7c819b7d0?cid=494c14a0db014067b6acb90f953987b2" type="audio/mpeg"></source>
        </audio> */}


<form onSubmit={handleSubmit} className='container py-3'>
      <div className='mb-1'>
        <input
          type='text'
          className='form-control'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <button type='submit' className='btn btn-primary'>Selecciona un artista</button>
    </form> 
      
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-md-2 g-4 gap-4">
        {artists && artists?.map((artist) => (
          <div className="card" style={{ width: '18rem' }} key={artist.id}>
            <img src={artist.images[0]?.url} className="card-img-top" alt="Imágenes de Álbumes" />
            <div className="card-body">
              <h5 className="card-title">{artist.name}</h5>
              <Link to={`/albums/${artist.id}`} className="btn btn-primary">View Albums</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </BaseComponent>

    </>
  )
}

export default Playlist;
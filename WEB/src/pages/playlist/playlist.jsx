import './playlist.css';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/playlist.jpg';
import { useState } from 'react';
import { getArtists, getAlbumsArtist, getListTracks} from '../../services/api.service';



function Playlist() {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([])
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search.trim()) {
      try {
        const { data } = await getArtists(search);
        setArtists(data)
      } catch(error){
        console.error(error)
      }
    }
  };

  const onClickArtist = async (id) => {
    getAlbumsArtist(id)
      .then(res => {
        setArtists([])
        setAlbums(res.data)
      })
  };

  const onClickAlbums = async (id) => {
    getListTracks(id)
      .then(res => {
        setAlbums([])
        setTracks(res.data)
      })
  };
  

  return (
    <>
      <BaseComponent backgroundImage={backgroundImage} >
        <div>
          <p>ELIGE TU MÚSICA Y COMPÁRTELA</p>
          <p>Arma tu play list y compartela o llevala contigo a tu local preferido</p>
        </div>

        <form onSubmit={handleSubmit} className='container py-3 artist'>
          <div className='mb-1'>
            <input type='text' className='form-control' name='search' value={search} onChange={(e) => setSearch(e.target.value)} />
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
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      onClickArtist(artist.id)
                    }}
                  >Ver los álbumes</button>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="container py-4">
          <div className="row row-cols-1 row-cols-md-2 g-4 gap-4">
            {albums && albums?.map((album) => (
              <div className="card" style={{ width: '18rem' }} key={album.id}>
                <img src={album.images[0]?.url} className="card-img-top" alt="Imágenes de Canciones" />
                <div className="card-body">
                  <h5 className="card-title">{album.name}</h5>
                  <button 
                    className="btn btn-primary"
                    onClick={() => {
                      onClickAlbums(album.id)
                    }}
                  >Ver canciones</button>
                </div>
              </div>
            ))}
          </div>
        </div>


        <ul className="list-group container py-4">
          <p>Seleciona tu canción</p>
          {tracks.map((track, index) => (
            <li key={index} className="list-group-item d-flex">
              <span className="me-auto">{track.name}</span>
              <audio controls src={track.preview_url} className="me-auto"></audio>
            </li>
          ))}
        </ul>
    
      </BaseComponent>

    </>
  );
}

export default Playlist;
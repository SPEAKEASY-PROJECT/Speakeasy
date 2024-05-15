import './playlist.css';
// import playlist from '../../../../API/controllers/spotify.controller';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '../../../public/images/playlist.jpg';

function Playlist() {
  return (
    <>
      <BaseComponent backgroundImage={backgroundImage} />

      {/* <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-2 g-4 gap-4">
          {albums.map(album => (
            <div className="card" style={{ width: '18rem' }}>
              <img src={album.images[0].url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <a href={`/tracks/${album.id}`} className="btn btn-primary">View Tracks</a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </>
  )
}


export default Playlist;
import './playlist.css';
// import playlist from '../../../../API/controllers/spotify.controller';
import BaseComponent from '../../components/ui/baseComponents/baseComponents';
import backgroundImage from '/images/playlist.jpg';

function Playlist() {
  return (
    <>
      <BaseComponent backgroundImage={backgroundImage} />

      <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-2 g-4 gap-4">
        <audio controls>
          <source src="https://p.scdn.co/mp3-preview/0cd36d02d2474520294b4f4247b9acc7c819b7d0?cid=494c14a0db014067b6acb90f953987b2" type="audio/mpeg"></source>
        </audio>




          {/* {albums.map(album => (
            <div className="card" style={{ width: '18rem' }}>
              <img src={album.images[0].url} className="card-img-top" alt=".imagen albún" />
              <div className="card-body">
                <h5 className="card-title">{album.name}</h5>
                <a href={`/tracks/${album.id}`} className="btn btn-primary">View Tracks</a>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </>
  )
}


export default Playlist;
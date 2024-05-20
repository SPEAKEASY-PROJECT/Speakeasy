import './itemSingle.css';
import Counter from '../../counter/counter'


function ItemSingle({ event, onTooggle}) {
const handleTooggle = () => onTooggle(event);


  return (

    <div className='single'>
      <div className='item card position-relative'>
        <div className='item -actions position-absolute'>
          <i className={`fa fa-heart${event.fav ? 'text-danger' : ''}`} role='button' onClick={handleTooggle}></i>
        </div>
        <img src={event.foto} style={{ height: '10rem', width: '16rem'}}  className='card-img-top' alt={event.nombre} />
          <div className='card-body'>
            <h5 className='card-title'>{event.nombre}</h5>
            <p className='card-text'>{event.tipo} </p>
            <a href='#' className='btn btn-primary'>comprar </a>
          </div>
      </div>
      <Counter />
    </div>
  )
}

ItemSingle.defaultProps = {
  onTooggle: () => {}
}

export default ItemSingle
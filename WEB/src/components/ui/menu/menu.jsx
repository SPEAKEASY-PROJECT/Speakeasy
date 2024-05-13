import ('./menu.css')
import { useState } from 'react';

function Menu() {

    const [toggle, setToggle] = useState(false);
    //const [api, setApi] = useState()

    const handleToogle = () => {
        setToggle(prev => !prev)
    }
/*
    useEffect(() => {
        const interval = setTimeout(() => setToggle(prev => !prev), 5000);
        apiService.getSongs().then(response => setApi(response.data)).catch()
        return () => {
            clearTimeout(interval)
        }
    },[])*/
  return (
    <div className='menu'>
        <img className="logo" src="../../../../images/logoSpeak.png" alt="logo" />
        <button id="abrir" className="open"><i className="bi bi-list"></i></button>
        <div className={`open ${toggle ? 'visible' : ''}`} id='ul-list'>
            <button className="cerrar" onClick={handleToogle} id="cerrar"><i className="bi bi-x-lg">Adios</i></button>
        </div>
        <nav className='menuNav'>
            <ul className="list">
                <li><a href="/home">Home</a></li>
                <li><a href="/playlist">Playlist</a></li>
                <li><a href="/locals">Locales</a></li>
                <li><a href="/events">Eventos</a></li>
                <li><a href="/comunity">Comunidad</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu;
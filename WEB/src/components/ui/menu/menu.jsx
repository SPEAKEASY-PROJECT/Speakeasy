import ('./menu.css')
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <button id="open" className="open">Abrir</button>
            <div className={`open ${toggle ? '.nav.visible' : ''}`}>
                <button className="close" onClick={handleToogle} id="close">Adios</button>
            </div>
            <nav className='menuNav'>
                <ul className="list">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/playlist">Playlist</Link></li>
                    <li><Link to="/locals">Locales</Link></li>
                    <li><Link to="/events">Eventos</Link></li>
                    <li><Link to="/comunity">Comunidad</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu;
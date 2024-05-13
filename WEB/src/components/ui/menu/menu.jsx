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
            <button id="open" className="open">Abrir</button>
            <div className={`open ${toggle ? '.nav.visible' : ''}`}>
                <button className="close" onClick={handleToogle} id="close">Adios</button>
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
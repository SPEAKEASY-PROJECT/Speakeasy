import ('./menu.css')
import React, { useState, useEffect } from 'react';

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
    <div>
        <img class="logo" src="./img/logoSpeak.png" alt="logo" />
        <button id="abrir" class="menu"><i class="bi bi-list"></i></button>
        <div onClick={handleToogle}>CLICK ME!</div>
        <nav className={`nav ${toggle ? 'visible' : ''}`} id="nav">
            
            <button class="cerrar" id="cerrar"><i class="bi bi-x-lg"></i></button>
            <ul class="nav-list">
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

export default Menu
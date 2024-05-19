import './chat.css';
import React, { useState, useEffect } from 'react';
import { createChat, getChat, updateChat, deleteChat } from '../../services/api.service';


function Chat() {
    const [chats, setChats] = useState([]);
    const [newChat, setNewChat] = useState({ owner: '', text: '', post: '' });
    const [error, setError] = useState(null);

    useEffect(() => {
        // Obtener chats iniciales
        // Puedes reemplazar esto con una llamada a una API que obtenga todos los chats
    }, []);

    const handleCreate = async () => {
        try {
            const response = await createChat(newChat);
            setChats([...chats, response.data]);
            setNewChat({ owner: '', text: '' });
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteChat(id);
            setChats(chats.filter(chat => chat._id !== id));
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <div className="chat-container">
            <h1 className="chat-header">Chats</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="chat-form">
                <input
                    type="text"
                    placeholder="Usuario*"
                    value={newChat.owner}
                    onChange={(e) => setNewChat({ ...newChat, owner: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Mensaje*(Escribe un mensaje que contenga al menos 5 letras)"
                    value={newChat.text}
                    onChange={(e) => setNewChat({ ...newChat, text: e.target.value })}
                />
                
                <button className='btn btn-primary' onClick={handleCreate}>Enviar mensaje</button>
            </div>
            <ul className="chat-list">
                {chats.map((chat) => (
                    <li key={chat._id} className="chat-item">
                        <p>{chat.text} . Escrito y enviado por : {chat.owner}</p>
                        <button className='btn btn-warning' onClick={() => handleDelete(chat._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Chat;

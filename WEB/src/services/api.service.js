import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
});

http.interceptors.request.use(function (config) {
  config.headers.authorization = `BEARER ${localStorage.getItem("token")}`;
  return config;
});

http.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
      config.headers.authorization = `BEARER ${token}`;
  }
  return config;
});



// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    const navigate = useNavigate(); 
    if (
      error.response.status === 401 &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" && 
      location.pathname !== '/' &&
      location.pathname !== "/intro" &&
      location.pathname !== '/home'
    ) {

      localStorage.removeItem("token");
      navigate("/login");
    }
    return Promise.reject(error);
  }
);

export function updateUser() {
  return true
}

export function createUser(data) {
    return http.post("/users", data);
}

export function login(data) {
    return http.post("/login", data).then((response) => {
      localStorage.setItem("token", response.data.accessToken);
  
      return response;
    });
  }

export function getProfile() {
    return http.get('/profile');
  }

export function logout() {
  localStorage.removeItem("token");
}


//LOCALES
export function getLocals() {
  const accessToken = localStorage.getItem("token");
  if (!accessToken) {
      return Promise.reject(new Error("No access token available"));
  }
  return http.get("/locals", { headers: { authorization: `BEARER ${accessToken}` }});
}

export function getListLocals() {
  return http.get('/locals');
}

export function getSelectedLocal(id) {
  return http.get(`/locals/${id}`);
}



//PLAYLIST
export function getArtists(search) {
  return http.get(`/artist-search?search=${search}`);
}

export function getAlbumsArtist(id) {
  return http.get(`/artists/${id}/albums`);
}

export function getListTracks(id) {
  return http.get(`/albums/${id}/tracks`);
}


//CHAT
export function createChat(data) {
  return http.post("/chats", data);
}

// Servicio para obtener un chat por ID
export function getChat(id) {
  return http.get(`/chats/${id}`);
}

// Servicio para actualizar un chat
export function updateChat(id, data) {
  return http.put(`/chats/${id}`, data);
}

// Servicio para eliminar un chat
export function deleteChat(id) {
  return http.delete(`/chats/${id}`);
}
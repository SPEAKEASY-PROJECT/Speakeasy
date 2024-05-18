import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
});

// http.interceptors.request.use(function (config) {
//   config.headers.authorization = `BEARER ${localStorage.getItem("token")}`;
//   return config;
// });

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

// export function getLocals() {
//     return http.get("/locals", { headers: { authorization: accessToken }})
//   }

export function getLocals() {
  const accessToken = localStorage.getItem("token");
  if (!accessToken) {
      return Promise.reject(new Error("No access token available"));
  }
  return http.get("/locals", { headers: { authorization: `BEARER ${accessToken}` }});
}


export function logout() {
  localStorage.removeItem("token");
}

export function getArtists(search) {
  return http.get(`/artist-search?search=${search}`);
}

export function getAlbumsArtist(id) {
  return http.get(`/artists/${id}/albums`);
}

export function getListTracks(id) {
  return http.get(`/albums/${id}/tracks`);
}

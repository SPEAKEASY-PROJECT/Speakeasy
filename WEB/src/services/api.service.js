import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:3000/api/v1'
});

// http.interceptors.request.use(function (config) {
//     config.headers.authorization = `BEARER ${localStorage.getItem("token")}`;
//     return config;
//   });

export function createUser(data) {
    return http.post("/users", data);
}

export function login(data) {
    return http.post("/login", data).then((response) => {
      localStorage.setItem("token", response.data.accessToken);
  
      return response;
    });
  }
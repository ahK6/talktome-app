// axiosInstances.js
import axios from "axios";

const privateInstance = axios.create({
  baseURL: "https://api.tuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

privateInstance.interceptors.request.use(
  (config) => {
    const token = "tu_token_de_autenticacion";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

privateInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Lógica para manejar errores de autenticación, por ejemplo, redirigir al login
    }
    return Promise.reject(error);
  }
);

const publicInstance = axios.create({
  baseURL: "https://api.tuapp.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

publicInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

publicInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { privateInstance, publicInstance };

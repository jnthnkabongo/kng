import axioClient from '../axiosClient';
import Swal from "sweetalert2";

export const LOGIN_USER = "LOGIN_USER";


export const getLogin = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axioClient.post(`SignInUser`, formData);
      const token = response.data.token; 
      localStorage.setItem('token', token);
      localStorage.setItem('data', JSON.stringify(response.data.data));
      return response.data; // Retourne les données si la connexion réussit
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: `${error.response.data.message}`,
        text: "Veuillez vérifier vos informations de connexion.",
      });
      throw error; // Renvoie l'erreur pour le traitement ultérieur
    }
  };
};


export const getUsers = () => {
  return axioClient
    .get(`users`)
    .then((response) => {
      return response.data.data;
    })
    .catch((error) => {
      if (error.response.status === 401) {
        alert("ok");
      } else {
        Swal.fire({
          icon: "error",
          title: "Erreur lors de la récupération des données",
          text: `${error}`,
        });
      }
    });
};

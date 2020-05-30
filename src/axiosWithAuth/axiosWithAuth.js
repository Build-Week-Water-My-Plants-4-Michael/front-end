import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
      baseURL: "https://waterplants.herokuapp.com",
      headers: {
          authorization: localStorage.getItem('token'),
          'x-auth-token': localStorage.getItem('token')
      }
  });
};

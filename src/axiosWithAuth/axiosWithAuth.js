import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://water-plants-be.herokuapp.com",
        headers: {
            Authorization: token
        },
    });
};


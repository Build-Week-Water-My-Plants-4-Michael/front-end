import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "dont have base URL yet",
    headers: {
      Authorization: token,
    },
  });
};

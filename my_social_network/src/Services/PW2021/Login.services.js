import axios from 'axios';
const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

export const useServices = {
    login: async (username, password) => {

        //console.log({ username, password });
        const response = axios.post(`${BASE_URL}/auth/signin`, {
            username: username,
            password: password
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return {};
            });
        return response;
    },

    verifyToken: async (token) => {
        const response = axios.get(`${BASE_URL}/auth/whoami`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                console.log(error);
                return {};
            });
        return response;
    },
};
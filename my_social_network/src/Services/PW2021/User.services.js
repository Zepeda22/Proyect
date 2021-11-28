import axios from 'axios';
const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1/post";

export const useUserServices = {
    getAll: async (parameter = {}, token) => {
        const { limit, page} = parameter
        const response = axios.get(`${BASE_URL}/all`, {
            params:{
                limit: limit,
                page: page
            },
            headers: { 
                Authorization: `Bearer ${token}` 
            }
        })
            .then(response => {
                console.log(response)
                return response.data;

            })
            .catch(error => {
                console.log(error);
                return {};
            });
        return response;
    },

    getAllFavorites: async (token) => {
        const response = axios.get(`${BASE_URL}/fav`, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
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

    getOne: async (id ,token) => {
        const response = axios.get(`${BASE_URL}/one/${id}`, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
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

    patchLike: async (id ,token) => {
        const response = axios.patch(`${BASE_URL}/like/${id}`,null, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
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

    patchFavorite: async (id ,token) => {
        const response = axios.patch(`${BASE_URL}/fav/${id}`,null, {
            headers: { 
                Authorization: `Bearer ${token}` 
            }
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

    addComment: async (comment, id ,token) => {
        const response = axios.patch(`${BASE_URL}/comment/${id}`,{description: comment},{headers: {Authorization: `Bearer ${token}`}})
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
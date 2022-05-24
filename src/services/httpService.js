import axios from "axios";
import { authId } from "../constants/constants";

export function axiosRequest() {
    axios.interceptors.request.use((config) => {
            const id = authId;
            config.baseURL = "https://quiz-builderapp.herokuapp.com";
            return {...config, headers: {...config.headers, Authorization: id } }

        },
        (err) => {
            return Promise.reject(err);
        });
}

export function axiosResponse() {
    axios.interceptors.response.use(undefined, (error) => {
        return Promise.reject(error);
    })
}

export function logout() {
    localStorage.removeItem("id");
    window.location.href = '/login';
}

const httpService = { logout: logout, get: axios.get, post: axios.post, delete: axios.delete, put: axios.put, interceptor: axiosRequest }
export default httpService;
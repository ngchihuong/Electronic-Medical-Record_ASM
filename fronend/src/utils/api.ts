import axios from "./axios.customize";

const createUserApi = (fullName: string, email: string, password: string) => {
    const URL_API = "users/register";
    const data = {
        fullName, email, password
    }
    return axios.post(URL_API, data);
}
const loginApi = (email:string, password: string) => {
    const URL_API = "users/login";
    const data = {
        email, password
    }
    return axios.post(URL_API, data);
}
const getUserApi = () => {
    const URL_API = "users/account";
    return axios.get(URL_API);
}
export {
    createUserApi,
    loginApi,
    getUserApi
}
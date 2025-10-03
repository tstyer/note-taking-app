import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL   //Allows me to import anything specified inside an env variable file. 
})

//The below is to see if you have an access token -  if you do, it will be added to auth header. 
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}` //How the jwt access token is passed. 
        }
    }
)

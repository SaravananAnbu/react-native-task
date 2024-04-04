import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const API = axios.create({
    headers: {
        common: {
            "Content-Type": "application/json",
        }
    },
    // Common base url
    baseURL: "https://dummyjson.com"
});

API.interceptors.request.use(
    async (config) => {
        // Inssert Auth for Each API request here Globally using axios interceptor
        const token = await AsyncStorage.getItem('token');
        config.headers["Authorization"] = token === null ? "" : "Bearer "+token;
        return config;
    },
    error => Promise.reject(error)
);

API.interceptors.response.use(
    (response) =>  {
        return response
    }, 
    async (error) => {
        console.log(error.response, "RESS")
        // If err happens redirect to login page
        if(error.response?.status === 401) {
            // Redirect to login page
        }   
    }
)


export default API;

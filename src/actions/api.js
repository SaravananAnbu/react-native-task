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
        
        return config;
    },
    error => Promise.reject(error)
);

API.interceptors.response.use(
    (response) =>  {
        return response
    }, 
    async (error) => {
        // If err happens redirect to login page
        if(error.response?.status === 401) {
            // Redirect to login page
        }   
    }
)


export default API;

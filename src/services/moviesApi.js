import axios from "axios";

const moviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params:{
        api_key: process.env.API_KEY,
        language: "pt-BR",
    }
})

export default moviesApi
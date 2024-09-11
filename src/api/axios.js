import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{
        'content-type': 'application/json',
    },
    timeout: 10000
})

export default axiosInstance
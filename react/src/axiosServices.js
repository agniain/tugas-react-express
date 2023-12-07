import axios from 'axios';

const baseURL = `http://localhost:3001/api/v5`

export const axiosGet = (url) =>{
    const resource = baseURL + url;
    console.log (resource);
    
    return axios.get(resource, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPost = (url, data) =>{
    return axios.post(`${baseURL}${url}`, data, {
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosDelete = (url) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
export const axiosPut = (url, data) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}
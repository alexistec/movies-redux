import axios from 'axios';

const baseURL = 'http://www.omdbapi.com/?apikey=7ee1b3d7';


export const apiCall = (url,data,headers,method) => axios({
    method,
    url : baseURL + url,
    data,
    headers
});
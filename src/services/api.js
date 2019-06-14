import axios from 'axios';

const api = axios.create({
    baseURL: 'htttps://rocketseat-nodeherohuapp.com/api'
});
 
export default api;

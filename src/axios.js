import axios from 'axios';
export let baseURL='http://localhost:8000/api/'
const Axios=axios.create({
    baseURL:`${baseURL}v1/`
});
Axios.defaults.withCredentials=true;
export default Axios;
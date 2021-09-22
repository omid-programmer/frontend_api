import Axios from "../axios";
export let threadsListRequest=(page)=>{
  return Axios.get(`threads?page=${page}`);
};
export let CreateNewThreadRequest=(formData)=>{
  return Axios.post(`threads`,formData);
};

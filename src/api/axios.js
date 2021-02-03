
import axios from 'axios'
export default function  getFetch(path,method,data={},params={}){
    return axios({
        url: `http://localhost:8000/api/${path}`,
        method: method,
        data: data,
        params: params,
    })
}
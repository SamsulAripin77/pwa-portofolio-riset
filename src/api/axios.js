import axios from "axios";
export default function getFetch(path, method, data = {}, params = {}) {
  let local_server = 'http://localhost:8000'
  let online_server = 'http://riset-portofolio-api.herokuapp.com'
  let user = JSON.parse(localStorage.getItem("login"));
  let token = user.token;
  console.log(token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  return axios({
    url: `${local_server}/api${path}`,
    method: method,
    data: data,
    params: params,
    headers: {
      accept: "application/json",
    },
  });
}

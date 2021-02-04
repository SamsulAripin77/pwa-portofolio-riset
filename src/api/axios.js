import axios from "axios";
export default function getFetch(path, method, data = {}, params = {}) {
  let user = JSON.parse(localStorage.getItem("login"));
  let token = user.token;
  console.log(token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  return axios({
    url: `http://riset-portofolio-api.herokuapp.com/api${path}`,
    method: method,
    data: data,
    params: params,
    headers: {
      accept: "application/json",
    },
  });
}

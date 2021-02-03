import http from '../http'

const getAll = () =>{
    return http.get('/sertifikasi')
}

const get = id => {
    return http.get(`/sertifikasi/${id}`)
}

const create = data => {
    return http.post(`/sertifikasi`)
}

const update = (id,data) => {
    return http.put(`/sertifikasi/${id}`,data)
}

const remove = id => {
    return http.delete(`/sertifikasi/${id}`)
}

export default {
    getAll,
    get,
    remove,
    create,
    update
}
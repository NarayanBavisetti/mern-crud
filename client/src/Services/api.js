import axios from 'axios'

const url = "http://localhost:8080/users"

export const getUsers = async (id) => {
    id = id || "";
    return await axios.get(`${url}/${id}`)
}
export const addUsers = async (user) => {
    return await axios.post(`${url}/add`,user)
}

export const updateUser = async (id,user) => {
    return await axios.put(`${url}/${id}`,user)
}

export const deleteUserData = async (id) => {
    return await axios.delete(`${url}/${id}`)
}
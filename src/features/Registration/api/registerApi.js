import axios from "axios"

const backendUrl = process.env("BACKEND_URL")

const registerUser = async (data) => await axios.post(`${backendUrl}/users`, data).then(res=>res.data)

const updateUser = async(data) => await axios.put(`${backendUrl}/users`, data).then(res=>res.data)

const getTags = async(type) => await axios.get(`${backendUrl}/tags/${type}`).then(res=>res.data)

const loginUser = async(data) => await axios.post(`${backendUrl}/auth/login`,data).then(res=>res.data)

export {registerUser, updateUser, getTags, loginUser}
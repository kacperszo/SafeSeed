import axios from "axios"
import { authHeaders } from "../../auth"

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const registerUser = async (data) => await axios.post(`${backendUrl}/users`, data).then(res=>res.data)

const updateUser = async ({data, userId}) => await axios.put(`${backendUrl}/users/${userId}`, data, authHeaders()).then(res=>res.data)

const getTags = async(type) => await axios.get(`${backendUrl}/tags/${type}`).then(res=>res.data)

const loginUser = async(data) => await axios.post(`${backendUrl}/auth/login`,data).then(res=>res.data)

export {registerUser, updateUser, getTags, loginUser}
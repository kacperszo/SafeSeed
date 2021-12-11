import axios from "axios"
import {authHeaders} from "../../auth";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getNewNickname = async() => {
    await axios.get(`${backendUrl}/users/regenerate-nickname`, authHeaders()).then(res=>res.data)
}

const getSimilarUsers = async() => {
    await axios.get(`${backendUrl}/users/similar`, authHeaders()).then(res=>res.data)
}

export { getNewNickname, getSimilarUsers }
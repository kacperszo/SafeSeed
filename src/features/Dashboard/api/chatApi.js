import { authHeaders } from "../../auth";
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
 
const getChatList = async () => await axios.get(`${backendUrl}/chatrooms`, authHeaders()).then(res=>res.data)

const getChat = async (roomId) => await axios.get(`${backendUrl}/chatrooms/${roomId}`,authHeaders()).then(res=>res.data)

const createChat = async (userId) => await axios.post(`${backendUrl}/`,{},authHeaders()).then(res=>res.data)

const leaveChat = async (roomId) => await axios.post(`${backendUrl}/chatrooms/${roomId}`,{},authHeaders()).then(res=>res.data)

export {getChat, getChatList, createChat, leaveChat}
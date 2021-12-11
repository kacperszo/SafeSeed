import { authHeaders } from "../../auth";
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL

const getSimilarUsers = async () => await axios.get(`${backendUrl}/users/similar`,authHeaders()).then(res=>res.data)

export { getSimilarUsers }
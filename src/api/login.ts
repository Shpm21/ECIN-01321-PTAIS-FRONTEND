import axios from 'axios';
const API = "http://localhost:9000"

interface Credentials {
    rutStudent: string
}

export const login = async (credentials: Credentials) => {

    const response = await axios.post(`${API}/login`, credentials);
    return response.data;
}
import axios from "axios";
const API = "http://localhost:9000"

export const getPersons = async () => {
    const { data } = await axios.get(`${API}/persons`);
    return data;
}
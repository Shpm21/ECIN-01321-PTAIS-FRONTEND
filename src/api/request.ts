import axios from 'axios';

const API = "http://localhost:9000";

let token: string = '';

export const setToken = (newToken: string): void => {
    token = `Bearer ${newToken}`;
}

export const getToken = (): string => {
    return token;
}

export const getStudyPlain = async (rutStudent: string, isAverageApproval: boolean, dispersion: number) => {
    let config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.post(`${API}/request`, {
        rutStudent,
        isAverageApproval,
        dispersion
    }, config);
    return response.data;
}

export const getPersonsByRut = async (rutStudent: string) => {
    let config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.get(`${API}/persons/${rutStudent}`, config);
    return response.data;
}

export const getAverageApproval = async (rutStudent: string) => {
    let config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.get(`${API}/averageapproval/${rutStudent}`, config);
    return response.data;
}


export const getPrerequisites = async () => {
    let config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.get(`${API}/prerequisites/`, config);

    return response.data;
}

export const getPrerequisitesByCodCourse = async (codCourse: string) => {
    let config = {
        headers: {
            Authorization: token
        }
    }
    const response = await axios.get(`${API}/prerequisites/info/${codCourse}`, config);
    return response.data;
}
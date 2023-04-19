import axios from "axios";

const baseURL = "https://api.github.com";

export const getUser = async (user) => {
    try {
        const response = await axios.get(`${baseURL}/users/${user}`);
        return response.data;
    } catch (error) {
        throw new Error(404);
    }
}

export const getUserRepositories = async (user) => {
    try {
        const response = await axios.get(`${baseURL}/users/${user}/repos`);
        return response.data;
    } catch (error) {
    }
}
import axios from "axios";


//base de la url
const baseURL = "https://api.github.com";

export const getUser = async (user) => {
    try {
        /*   console.log('userService', user); */
        //base + endpoint + parametro(nombre del usuario)
        // llamamos al servicio y lo retornamos
        const response = await axios.get(`${baseURL}/users/${user}`);
        console.log('RESPONSE---->', response.data);
        return response.data;
    } catch (error) {
        console.log('getuser', error);
        throw new Error(404);
    }
}

export const getUserRepositories = async (user) => {
    try {
        //base + endpoint + parametro(nombre del usuario)
        // llamamos al servicio y lo retornamos
        const response = await axios.get(`${baseURL}/users/${user}/repos`);
        console.log('RESPONSE2---->', response.data);
        return response.data;
    } catch (error) {
        console.log('getRepo', error);
    }
}
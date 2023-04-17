import axios from "axios";

//base de la url
const baseURL = "https://api.github.com";

export const getUser = async (user) => {
    try {

        //base + endpoint + parametro(nombre del usuario)
        // llamamos al servicio y lo retornamos
        const response = await axios.get(`${baseURL}/users/${user}`);
        console.log('RESPONSE---->', response.data);
        return response.data;
    } catch (error) { }
}
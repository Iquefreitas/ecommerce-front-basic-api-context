import axios from 'axios';
//Executar o json local:
// json-server --watch db.json

export const api = axios.create({
    baseURL: "http://localhost:3000/"
})
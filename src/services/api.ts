import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.3:3333'
});

export default api;

//command start json server 
//json-server ./src/services/server.json --host 192.168.100.3 --port 3333 --delay 700
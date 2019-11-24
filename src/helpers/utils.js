import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

let utilities = {
    request: (config) => {
        return axios.request(config);
    }
};
export default utilities;
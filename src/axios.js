import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/airbnb-react-build/us-central1/api'
    // https://jsonkeeper.com/b/4G1G
})

export default instance;
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b8e336ddeea448de8354cbe8e1de4cfb',
    }
});
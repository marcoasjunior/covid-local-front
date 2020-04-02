import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localvid.herokuapp.com/api',
})

export default api
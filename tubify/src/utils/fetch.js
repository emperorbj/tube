import axios from 'axios';



const BASE_URL = 'https://youtube-data8.p.rapidapi.com';
const apiKey = import.meta.env.REACT_APP_RAPID_API_KEY
const options = {
        method: 'GET',
        url: BASE_URL,
        params: {
        q: 'movie',
        hl: 'en',
        gl: 'US'
        },
        headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
        }
};

export const fetchFromAPI = async (url) => {
        const { data } = await axios.get(`${BASE_URL}/${url}`, options);

        return data;
};
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
        'x-rapidapi-key': '02ac68da04msh8553818dfdb7979p1b3047jsn11b3a62643a2',
        'x-rapidapi-host': 'youtube-data8.p.rapidapi.com'
        }
};

export const fetchFromAPI = async (url) => {
        try{
                const { data } = await axios.get(`${BASE_URL}/${url}`, options);
                return data;
        } catch (error) {
                if (error.response) {
                  // Request made and server responded with status code
                        console.error(error.response.data);
                        console.error(error.response.status);
                        console.error(error.response.headers);
                        } else if (error.request) {
                        // Request made but no response received
                        console.error(error.request);
                        } else {
                        // Something happened in setting up the request that triggered an Error
                        console.error('Error', error.message);
                        }
                }
};
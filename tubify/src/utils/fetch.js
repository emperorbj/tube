import axios from 'axios';


const BASE_URL = 'https://youtube-data8.p.rapidapi.com/search/'

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
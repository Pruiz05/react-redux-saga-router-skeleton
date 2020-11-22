import axios from 'axios';
//?             http://www.omdbapi.com/?i=tt3896198&apikey=f2b6184c
const baseURL ='https://www.omdbapi.com/?apiKey=ffd0c3a5';// 'https://movie-database-imdb-alternative.p.rapidapi.com/';//
//const url_base =
 

// const options = {
//     method: 'GET',
//     url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
//     params: {s: 'Avengers Endgame', page: '1', r: 'json'},
//     headers: {
//       'x-rapidapi-key': '481ee0c3d2msh36540585ed9cb6ap1d76cajsnc413cb3aa3d8',
//       'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
//     }
//   };


export const apiCall = (url, data, headers, method) =>axios({
    method,
    url: baseURL + url,
    data,
    headers
});
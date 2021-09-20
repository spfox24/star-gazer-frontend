// const BASE_URL = 'http://localhost:3001/api/apod';
const BASE_URL = 'http://nasa-star-gazer.herokuapp.com/';

function fetchApodData() {
    return fetch(BASE_URL).then(res => res.json());
};

export {
    fetchApodData
};
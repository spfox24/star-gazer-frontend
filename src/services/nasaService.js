const BASE_URL = 'http://localhost:3001/api/apod';

function fetchApodData() {
    return fetch(BASE_URL).then(res => res.json());
};

export {
    fetchApodData
};
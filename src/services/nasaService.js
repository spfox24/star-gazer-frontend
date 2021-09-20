const BASE_URL = 'https://nasa-star-gazer.herokuapp.com/';

function fetchApodData() {
    return fetch(BASE_URL).then(res => res.json());
};

export {
    fetchApodData
};
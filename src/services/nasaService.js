const BASE_URL = 'https://nasa-star-gazer.herokuapp.com/api';

function fetchApodData() {
    url = BASE_URL
    return fetch(url).then(res => res.json());
};

export {
    fetchApodData
};
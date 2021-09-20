const BASE_URL = 'https://api.nasa.gov/planetary/apod?count=10&api_key=vUD4yoWP5SUy4WvNSlzPiZG2RnmJJPeCkfDqkpwB';

function fetchApodData() {
    return fetch(BASE_URL).then(res => res.json());
};

export {
    fetchApodData
};
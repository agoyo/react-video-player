import axios from 'axios';

const KEY='AIzaSyCGVvMMfDwMO_a11u6vQiL9ET5wjV-5m7U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});

//npm install axios@0.18.1

import axios from 'axios';

export const fetchName = (nameId) => {
    return axios.get(`/api/names/${nameId}`)
                .then(resp => resp.data)
};

export const fetchNameList = () => {
    return axios.get('/api/names')
                .then(resp => resp.data.names);
}
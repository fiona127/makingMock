import axios from 'axios';

export const fetchUser = (userId) => {
    return axios.get(`/api/users/${userId}`)
                .then(resp => resp.data)
};

export const fetchUserList = () => {
    return axios.get('/api/users')
                .then(resp => resp.data.users);
}
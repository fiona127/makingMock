// fetch the data from the api

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = (userId) => {
    if(userId){
        return `${config.serverUrl}/api/users/${userId}`;
    }
    return `${config.serverUrl}/api/users`
};

const getInitialData = (userId, apiData) => {
    if(userId) {
        return{
            currentUserId: apiData.id,
            users: {
                [apiData.id]: apiData
            }
        }
    }
    return {
        users: apiData.users
    }
}

const serverRender = (userId) => 
    axios.get(getApiUrl(userId))
        .then(resp => {
            const initialData = getInitialData(userId, resp.data);
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData}/>
                ),
                initialData
            };
        });


export default serverRender;
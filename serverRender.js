// fetch the data from the api

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

const getApiUrl = (nameId) => {
    if(nameId){
        return `${config.serverUrl}/api/names/${nameId}`;
    }
    return `${config.serverUrl}/api/names`
};

const getInitialData = (nameId, apiData) => {
    if(nameId) {
        return{
            currentNameId: apiData.id,
            names: {
                [apiData.id]: apiData
            }
        }
    }
    return {
        names: apiData.names
    }
}

const serverRender = (nameId) => 
    axios.get(getApiUrl(nameId))
        .then(resp => {
            const initialData = getInitialData(nameId, resp.data);
            return {
                initialMarkup: ReactDOMServer.renderToString(
                    <App initialData={initialData}/>
                ),
                initialData
            };
        });


export default serverRender;
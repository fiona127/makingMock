import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import App from './components/App';
import data from './testData';
console.log(data);

ReactDOM.render(
    <App names={data.names}/>,
    document.getElementById('root')
);
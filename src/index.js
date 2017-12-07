import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import App from './components/App';
import data from './testData';
import FirstTab from './components/FirstTab';

ReactDOM.render(
    <App initialData={window.initialData}/>,
    document.getElementById('root')
);

ReactDOM.render(
    <FirstTab />,
    document.getElementById('tab2rt')
);




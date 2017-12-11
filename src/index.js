import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import App from './components/App';
import FirstTab from './components/FirstTab';

ReactDOM.render(
    <App initialData={window.initialData}/>,
    document.getElementById('root')
);

ReactDOM.render(
    <FirstTab />,
    document.getElementById('tab2rt')
);




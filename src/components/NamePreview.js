import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const NamePreview = (name) => (
    <div className="NamePreview">
        <div>
            {name.fullName}
        </div>
        <div>
            {name.username}
        </div>
    </div>

);

export default NamePreview;
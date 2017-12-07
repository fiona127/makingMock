import React from 'react';
import PropTypes from 'prop-types';
import NamePreview from './NamePreview';

const NameList = ({names, onNameClick}) => (
    <div className="NameList">
        {Object.keys(names).map(nameId =>
            <NamePreview key={nameId} onClick={onNameClick} {...names[nameId]}/>
        )}
    </div>
);

NameList.propTypes = {
    names: PropTypes.object,
    onNameClick: PropTypes.func.isRequired
};

export default NameList;
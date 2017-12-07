import React from 'react';
import PropTypes from 'prop-types';

class  Name extends React.Component {
    render() {
        return (
            <div className="Name">
                {this.props.description}
            </div>
        );
    }
}

Name.propTypes = {
    description: PropTypes.string.isRequired
};

export default Name;
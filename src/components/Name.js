import React from 'react';
import PropTypes from 'prop-types';

class  Name extends React.Component {
    render() {
        return (
            <div className="Name">
                <div className="name-description">
                    {this.props.description}
                </div>
                <div className="home-link link" onClick={this.props.nameListClick}>
                    Back to Name List
                </div>
            </div>
        );
    }
}

Name.propTypes = {
    description: PropTypes.string.isRequired,
    nameListClick: PropTypes.func.isRequired
};

export default Name;
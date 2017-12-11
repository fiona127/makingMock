import React from 'react';
import PropTypes from 'prop-types';

class  User extends React.Component {
    render() {
        return (
            <div className="User">
                <div className="user-description">
                    {this.props.description}
                </div>
                <div className="home-link link" onClick={this.props.userListClick}>
                    Back to User List
                </div>
            </div>
        );
    }
}

User.propTypes = {
    description: PropTypes.string.isRequired,
    userListClick: PropTypes.func.isRequired
};

export default User;
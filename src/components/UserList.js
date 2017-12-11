import React from 'react';
import PropTypes from 'prop-types';
import UserPreview from './UserPreview';

const UserList = ({users, onUserClick}) => (
    <div className="UserList">
        {Object.keys(users).map(userId =>
            <UserPreview key={userId} onClick={onUserClick} {...users[userId]}/>
        )}
    </div>
);

UserList.propTypes = {
    users: PropTypes.object,
    onUserClick: PropTypes.func.isRequired
};

export default UserList;
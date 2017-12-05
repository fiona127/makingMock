import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function UserGreetings(list) {
    return <h1>Welcome user</h1>;
};

function GuestGreetings(list) {
    return null;
};

function Greetings(list) {
    const isLoggedIn = list.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreetings />;
    }
    return <GuestGreetings />;
};

export default Greetings;
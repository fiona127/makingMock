import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function UserGreetings(log) {
    return <h1>Welcome user</h1>;
};

function GuestGreetings(log) {
    return null;
};

function Greetings(log) {
    const isLoggedIn = log.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreetings />;
    }
    return <GuestGreetings />;
};

export default Greetings;
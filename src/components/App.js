import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

//import {HeaderM} from './Header';
import Header from './Header';
import UserList from './UserList';
import Greetings from './Greetings';
import User from './User';
import * as api from '../api';

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url);
}

const onPopState = (handler) => {
    window.onpopstate = handler;
};

class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    state = this.props.initialData;
    componentDidMount() {
        onPopState((event) => {
            this.setState({
                currentUserId: (event.state || {}).currentUserId
            })
        })
    }
    componentWillUnmount(){
        onPopState(null);
    }
    fetchUser = (userId) => {
        pushState(
            {currentUserId: userId},
            `/users/${userId}`
        );
        api.fetchUser(userId).then(user => {
            this.setState({
                currentUserId: user.id,
                users: {
                    ...this.state.users,
                    [user.id]: user
                }
            });
        });
    };
    fetchUserList = () => {
        pushState(
            {currentUserId: null},
            `/`
        );
        api.fetchUserList().then(users => {
            this.setState({
                currentUserId: null,
                users
            });
        });
    }; 
    currentUser() {
        return this.state.users[this.state.currentUserId];
    }
    pageHeader() {
        if (this.state.currentUserId) {
            return this.currentUser().fullName;
        }
        return 'All the Users';
    }
    currentContent() {
        if (this.state.currentUserId){
            return <User 
                userListClick={this.fetchUserList}
                {...this.state.users[this.state.currentUserId]}/>;
        }
        return <UserList 
                    onUserClick={this.fetchUser}
                    users={this.state.users} />; 
    }
    render(){
        return (
            <div className = "App" >
                <div>
                    <Greetings isLoggedIn={true}/>
                </div>
                <Header message={this.pageHeader()}/>
                {this.currentContent()}
            </div>
        );
    }
    
};


export default App;
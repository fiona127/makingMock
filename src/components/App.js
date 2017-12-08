import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

//import {HeaderM} from './Header';
import Header from './Header';
import NameList from './NameList';
import Greetings from './Greetings';
import Name from './Name';
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
                currentNameId: (event.state || {}).currentNameId
            })
        })
    }
    componentWillUnmount(){
        onPopState(null);
    }
    fetchName = (nameId) => {
        pushState(
            {currentNameId: nameId},
            `/names/${nameId}`
        );
        api.fetchName(nameId).then(name => {
            this.setState({
                currentNameId: name.id,
                names: {
                    ...this.state.names,
                    [name.id]: name
                }
            });
        });
    };
    fetchNameList = () => {
        pushState(
            {currentNameId: null},
            `/`
        );
        api.fetchNameList().then(names => {
            this.setState({
                currentNameId: null,
                names
            });
        });
    }; 
    currentName() {
        return this.state.names[this.state.currentNameId];
    }
    pageHeader() {
        if (this.state.currentNameId) {
            return this.currentName().fullName;
        }
        return 'All the Names';
    }
    currentContent() {
        if (this.state.currentNameId){
            return <Name 
                nameListClick={this.fetchNameList}
                {...this.state.names[this.state.currentNameId]}/>;
        }
        return <NameList 
                    onNameClick={this.fetchName}
                    names={this.state.names} />; 
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
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

import Header from './Header';
import NameList from './NameList';
import Greetings from './Greetings';
import Name from './Name';
import * as api from '../api';

const pushState = (obj, url) => {
    window.history.pushState(obj, '', url);
}


class App extends React.Component {
    static propTypes = {
        initialData: PropTypes.object.isRequired
    }
    state = this.props.initialData;
    componentDidMount() {

    }
    componentWillUnmount(){

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
    currentName() {
        return this.state.names[this.state.currentNameId];
    }
    pageHeader(){
        if (this.state.currentNameId){
            return this.currentName().fullName;
        }
        return 'Naming Contests';
    }
    currentContent() {
        if (this.state.currentNameId){
            return <Name {...this.state.names[this.state.currentNameId]}/>;
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
                <Header message={this.pageHeader()} />
                {this.currentContent()}
            </div>
        );
    }
    
};


export default App;
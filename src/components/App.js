import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 

import Header from './Header';
import NamePreview from './NamePreview';
import Greetings from './Greetings';

class App extends React.Component {
    state = {
        pageHeader: 'Rocking at Florical'
    };
    render(){
        return (
            <div className = "App" >
                <Header message={this.state.pageHeader} />
                <div>
                    {this.props.names.map(name =>
                        <NamePreview key={name.id} {...name}/>
                    )}
                </div>
                <div>
                    <Greetings isLoggedIn={true}/>
                </div>
            </div>
        );
    }
};


export default App;
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class NamePreview extends Component{
    handleClick = () => {
        this.props.onClick(this.props.id);
    };
    render(){
        return(
            <div className="link NamePreview" onClick={this.handleClick}>
                <div className="fullName">
                    {this.props.fullName}
                </div>
                <div className="username">
                    {this.props.username}
                </div>
            </div>
        );
    }
}

NamePreview.propTypes = {
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NamePreview;
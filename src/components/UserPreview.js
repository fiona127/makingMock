import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class UserPreview extends Component{
    handleClick = () => {
        this.props.onClick(this.props.id);
    };
    render(){
        return(
            <div className="link UserPreview" onClick={this.handleClick}>
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

UserPreview.propTypes = {
    id: PropTypes.number.isRequired,
    fullName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default UserPreview;
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'; 
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';


export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render(){
        return(
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Florical Systems</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/first">First Tab</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/second">Second Tab</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/third">Third Tab</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );

    }
}

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

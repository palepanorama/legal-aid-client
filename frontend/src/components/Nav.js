import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <div className="Nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/attorneys">Attorneys</Link></li>
                    <li><Link to="/attorneys/new">Register to Help</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav

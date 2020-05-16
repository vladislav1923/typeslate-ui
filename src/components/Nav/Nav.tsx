import React, {Component} from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';

export class Nav extends Component {

    public render() {
        return (
            <div className="nav">
                <NavLink to="/" style={{'textDecoration': 'none'}}>
                    <p className="nav__app-name">Typeslate.</p>
                </NavLink>
            </div>
        );
    }

}

import React, {Component} from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import {NavLink} from 'react-router-dom';

export class Header extends Component {

    public render() {
        return (
            <div className="header">
                <div className="header__content container">
                    <NavLink to={'/'} style={{textDecoration: 'none'}}>
                        <Logo />
                    </NavLink>
                </div>
            </div>
        )
    }

}

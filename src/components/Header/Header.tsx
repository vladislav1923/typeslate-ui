import React, {Component} from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';

export class Header extends Component {

    public render() {
        return (
            <div className="header">
                <div className="header__content container">
                    <Logo />
                </div>
            </div>
        )
    }

}

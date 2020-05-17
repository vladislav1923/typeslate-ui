import React, {Component} from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';

type Props = {}

type State = {
    isMobileMenuOpen: boolean
}

export class Nav extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isMobileMenuOpen: false
        }
    }

    public onToggleMobileMenu() {
        this.setState({isMobileMenuOpen: !this.state.isMobileMenuOpen})
    }

    public render() {
        return (
            <div className="nav">
                <div className="nav__not-mobile">
                    <div className="nav__not-mobile-content">
                        <NavLink to="/" style={{'textDecoration': 'none'}}>
                            <p className="nav__app-name">Typeslate.</p>
                        </NavLink>
                    </div>
                </div>
                <div className="nav__mobile">
                    <div className={this.state.isMobileMenuOpen ? 'nav__mobile-slider nav__mobile-slider--active' : 'nav__mobile-slider'}>
                        <div className="nav__mobile-content">
                            <NavLink to="/" style={{'textDecoration': 'none'}}>
                                <p className="nav__app-name">Typeslate.</p>
                            </NavLink>
                        </div>
                    </div>
                    <div className="nav__mobile-controls">
                        {!this.state.isMobileMenuOpen &&
                            <div className="nav__mobile-control">
                                <NavLink to="/" style={{'textDecoration': 'none'}}>
                                    <p className="nav__app-name nav__app-name--mobile">T.</p>
                                </NavLink>
                            </div>
                        }

                        <div className="nav__mobile-control" onClick={() => this.onToggleMobileMenu()}>
                            {this.state.isMobileMenuOpen ? <CloseIcon className="nav__mobile-menu-icon" /> : <ListIcon className="nav__mobile-menu-icon" />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

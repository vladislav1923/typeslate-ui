import React, {Component} from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import CloseIcon from '@material-ui/icons/Close';
import {ArticlesList} from '../ArticlesList/ArticlesList';

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
                        <div className="nav__app-name-wrapper">
                            <NavLink to="/" style={{'textDecoration': 'none'}}>
                                <p className="nav__app-name">Typeslate.</p>
                            </NavLink>
                        </div>

                        <div className="nav__articles-list-wrapper">
                            <ArticlesList />
                        </div>
                    </div>
                </div>
                <div className="nav__mobile">
                    <div className={this.state.isMobileMenuOpen ? 'nav__mobile-slider nav__mobile-slider--active' : 'nav__mobile-slider'}>
                        <div className="nav__mobile-content">
                            <div className="nav__app-name-wrapper">
                                <NavLink to="/" style={{'textDecoration': 'none'}}>
                                    <p className="nav__app-name">Typeslate.</p>
                                </NavLink>
                            </div>

                            <div className="nav__articles-list-wrapper">
                                <ArticlesList />
                            </div>
                        </div>
                    </div>
                    <div className="nav__mobile-controls">
                        <div className="nav__mobile-control">
                            <div className="nav__app-name-wrapper nav__app-name-wrapper--mobile">
                                {!this.state.isMobileMenuOpen &&
                                    <NavLink to="/" style={{'textDecoration': 'none'}}>
                                        <p className="nav__app-name">T.</p>
                                    </NavLink>
                                }
                            </div>
                        </div>

                        <div className="nav__mobile-control" onClick={() => this.onToggleMobileMenu()}>
                            {this.state.isMobileMenuOpen ? <CloseIcon className="nav__mobile-menu-icon" /> : <ListIcon className="nav__mobile-menu-icon" />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

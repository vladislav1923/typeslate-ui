import React, {Component} from 'react';
import {AppBar, Container, Toolbar} from '@material-ui/core';
import Logo from '../Logo/Logo';

export class Header extends Component {

    public render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Container maxWidth="lg">
                        <Logo />
                    </Container>
                </Toolbar>
            </AppBar>
        )
    }

}

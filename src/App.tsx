import React, {Component} from 'react';
import {Shell} from './pages/Shell/Shell';
import {Main} from './pages/Main/Main';

export class App extends Component {

    public render() {
        return (
            <Shell>
                <Main />
            </Shell>
        );
    }

}

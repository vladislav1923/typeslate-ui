import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Shell} from './pages/Shell/Shell';
import {Main} from './pages/Main/Main';
import {Article} from './pages/Article/Article';

export class App extends Component {

    public render() {
        return (
            <BrowserRouter>
                <Shell>
                    <Switch>
                        <Route path={'/'} exact component={Main} />
                        <Route path={'/article/:id'} component={Article} />
                        <Redirect from="*" to={'/'} />
                    </Switch>
                </Shell>
            </BrowserRouter>
        );
    }

}

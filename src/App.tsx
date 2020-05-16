import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Shell} from './pages/Shell/Shell';
import Main from './pages/Main/Main';
import {Article} from './pages/Article/Article';
import rootReducer from './store/reducers/root.reducer';

const store = createStore(rootReducer);

export class App extends Component {
    public render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Shell>
                        <Switch>
                            <Route path={'/'} exact component={Main} />
                            <Route path={'/article/:id'} component={Article} />
                            <Redirect from="*" to={'/'} />
                        </Switch>
                    </Shell>
                </BrowserRouter>
            </Provider>
        );
    }

}

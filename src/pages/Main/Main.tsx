import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router';
import './Main.scss';
import {Document} from '../../components/Document/Document';

type Props = {}

type State = {}

export class Main extends Component<RouteComponentProps & Props, State> {

    public onDocumentClick = () => {
        const id = '1000000';
        this.props.history.push(`/article/${id}`);
    }

    public render() {

        return (
            <div className="container">
                <h1 className="main__header">Документация</h1>

                <ul className="main__list">
                    <li className="main__item" onClick={this.onDocumentClick}>
                        <Document/>
                    </li>
                </ul>
            </div>
        )
    }

}

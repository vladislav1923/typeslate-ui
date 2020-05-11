import React, {Component} from 'react';
import './Main.scss';
import {Document} from '../../components/Document/Document';

export class Main extends Component {

    public render() {

        return (
            <div className="container">
                <h1 className="main__header">Документация</h1>

                <ul className="main__list">
                    <li className="main__item">
                        <Document/>
                    </li>
                </ul>
            </div>
        )
    }

}

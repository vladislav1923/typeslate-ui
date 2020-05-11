import React, {Component} from 'react';
import './Document.scss';

export class Document extends Component {

    public render() {
        return (
            <div className="document">
                <img src="./typescript.png" alt="" className="document__image"/>
                <div className="document__content">
                    <h3 className="document__title">Typescript</h3>
                    <p className="document__desc">Lorem ipsum bla bla bla bl</p>
                    <span className="document__date">Последнее обновление: 22.22.2012</span>
                </div>
            </div>
        );
    }

}

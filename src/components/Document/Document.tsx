import React, {Component} from 'react';
import './Document.scss';

export class Document extends Component {

    public render() {
        return (
            <div className="document">
                <div className="document__image-wrapper">
                    <img className="document__image" src="./typescript.png" alt=""/>
                </div>
                <div className="document__content">
                    <h3 className="document__title">Just a Standard Format Post.</h3>
                    <p className="document__date">APR 29, 2019</p>
                    <p className="document__desc">
                        Lorem ipsum Sed eiusmod esse aliqua
                    </p>
                </div>
            </div>
        );
    }

}

import React, {Component} from 'react';
import './Shell.scss';
import {Nav} from '../../components/Nav/Nav';

export class Shell extends Component {

    public render() {
        return (
            <div className="shell">

                <nav className="shell__nav">
                    <Nav />
                </nav>

                <main className="shell__main">
                    { this.props.children }
                </main>

            </div>
        )
    }

}

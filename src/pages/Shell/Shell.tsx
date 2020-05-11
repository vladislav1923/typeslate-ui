import React, {Component} from 'react';
import './Shell.scss';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';

export class Shell extends Component {

    public render() {
        return (
            <div className="shell">
                <header className="shell__header">
                    <Header/>
                </header>

                <main className="shell__main">
                    { this.props.children }
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }

}

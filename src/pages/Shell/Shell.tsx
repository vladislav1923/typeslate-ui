import React, {Component} from 'react';
import './Shell.css';
import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';

export class Shell extends Component {

    public render() {
        return (
            <div className="Shell">
                <header>
                    <Header/>
                </header>

                <main>
                    { this.props.children }
                </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }

}

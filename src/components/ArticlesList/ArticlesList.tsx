import React, {Component} from 'react';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './ArticlesList.scss';

type Props = {

}

type State = {
    isOpen: boolean
}

export class ArticlesList extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public onDrawerToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    public render() {
        return (
            <div className="articles-list">
                <h2 className="articles-list__title">Документация Typescript</h2>

                <ul className="articles-list__list">
                    <li className="articles-list__item">
                        <p className="articles-list__group">Sent mail</p>
                    </li>
                    <li className="articles-list__item">
                        <p className="articles-list__group">Sent mailSent mailSent mailSent mail</p>
                    </li>
                    <li className="articles-list__item">
                        <p className="articles-list__group" onClick={this.onDrawerToggle}>
                            Sent mailSent mailSent mailSent mail

                            <span className="articles-list__group-arrow">
                                {this.state.isOpen ? <ExpandLess /> : <ExpandMore />}
                            </span>
                        </p>

                        <Collapse in={this.state.isOpen} timeout="auto" unmountOnExit>
                            <ul className="articles-list__list">
                                <li className="articles-list__item">
                                    <p className="articles-list__article">Sent mail</p>
                                </li>
                                <li className="articles-list__item">
                                    <p className="articles-list__article">Sent mail</p>
                                </li>
                                <li className="articles-list__item">
                                    <p className="articles-list__article">Sent mail</p>
                                </li>
                                <li className="articles-list__item">
                                    <p className="articles-list__article">Sent mail</p>
                                </li>
                            </ul>
                        </Collapse>
                    </li>
                </ul>
            </div>
        );
    }

}

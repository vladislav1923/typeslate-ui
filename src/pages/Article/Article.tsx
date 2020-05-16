import React, {Component} from 'react';
import './Article.scss';
import Drawer from '@material-ui/core/Drawer';
// import Fab from '@material-ui/core/Fab';
// import DehazeIcon from '@material-ui/icons/Dehaze';
import {ArticlesList} from '../../components/ArticlesList/ArticlesList';

type Props = {

}

type State = {
    isDrawerOpen: boolean
}

export class Article extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            isDrawerOpen: false
        };
    }

    public onDrawerToggle = () => {
        this.setState({isDrawerOpen: !this.state.isDrawerOpen});
    }

    public render() {
        return (
            <div className="container">
                <div className="article">
                    <div className="article__list">
                        <ArticlesList/>
                    </div>
                    <div className="article__content">
                        <h1 className="article__content-title">ТУУТ будет тема значит статьи вот тут</h1>

                        <p className="article__content-text">
                            ТУУТ будет тема значит статьи вот тутТУУТ будет тема значит статьи вот тутТУУТ
                            будет тема значит статьи вот тутТУУТ будет тема значит статьи вот тут
                        </p>

                        <div className="article__content-origin">
                            <a href="https://ya.ru" target="_blank" rel="noopener noreferrer" className="article__content-link">Оригинал статьи</a>
                        </div>

                        <div className="article__content-continue">
                            <a href="https://ya.ru" className="article__content-next">Далее: ТУУТ будет тема значит статьи вот тут</a>
                        </div>
                    </div>

                    {/*<div className="article__fab">*/}
                    {/*    <Fab color="primary" onClick={this.onDrawerToggle}>*/}
                    {/*        <DehazeIcon />*/}
                    {/*    </Fab>*/}
                    {/*</div>*/}

                    <Drawer open={this.state.isDrawerOpen} onClose={this.onDrawerToggle}>
                        <ArticlesList/>
                    </Drawer>
                </div>

                <div className="article__bread-crumbs">
                    <a href="https://ya.ru" className="article__bread-crumbs-link">Typescript</a>
                    <span className="article__bread-crumbs-sep">/</span>
                    <a href="https://ya.ru" className="article__bread-crumbs-link">ТУУТ будет тема значит статьи вот тут</a>
                </div>
            </div>
        );
    }

}

import React, {Component} from 'react';
import './Article.scss';

type Props = {

}

type State = {
    isDrawerOpen: boolean
}

export class Article extends Component<Props, State> {

    public render() {
        return (
            <div className="article">
                <div className="article__content">
                    <h1 className="article__content-title">ТУУТ будет тема значит статьи вот тут</h1>

                    <p className="article__content-text">
                        ТУУТ будет тема значит статьи вот тутТУУТ будет тема значит статьи вот тутТУУТ
                        будет тема значит статьи вот тутТУУТ будет тема значит статьи вот тут
                    </p>

                    <div className="article__content-origin">
                        <a href="https://ya.ru" target="_blank" rel="noopener noreferrer" className="article__content-origin-link">Оригинал статьи</a>
                    </div>

                    <div className="article__content-continue">
                        <a href="https://ya.ru" className="article__content-next">Далее: ТУУТ будет тема значит статьи вот тут</a>
                    </div>
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

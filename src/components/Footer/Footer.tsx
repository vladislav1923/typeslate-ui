import React, {Component} from 'react';
import './Footer.scss';
import GitHubIcon from '@material-ui/icons/GitHub';

export class Footer extends Component {

    public render() {
        return (
            <div className="footer">
                <div className="footer__content container">
                    <p className="footer__copyright">
                        2020 | Разработано и переведено в учебных целях
                    </p>

                    <a href="https://github.com/vladislav1923" target="_blank" rel="noopener noreferrer" className="footer__link">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
        )
    }

}

import React, {Component} from 'react';
import {RouteComponentProps} from 'react-router';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import './Main.scss';
import {Document} from '../../components/Document/Document';
import {StoreActionsEnum} from '../../enums/store-actions.enum';
import {StoreActionInterface} from '../../interfaces/store-action.interface';
import {DocumentInterface} from '../../interfaces/document.interface';
import {StoreStateInterface} from '../../interfaces/store-state.interface';

type Props = {
    state: any,
    addDocuments: (data: any) => void
}

type State = {}

class Main extends Component<RouteComponentProps & Props, State> {

    public onDocumentClick = () => {
        const id = '1000000';
        this.props.history.push(`/article/${id}`);
    }

    public render() {
        console.log(this.props);

        return (
            <div className="container">
                <ul className="main__list">
                    <li className="main__item" onClick={this.onDocumentClick}>
                        <Document/>
                    </li>
                </ul>
            </div>
        )
    }
}

const stateToProps = (state: any) => {
    return {
        state: state
    }
};

const dispatchToProps = (dispatch: (data: StoreActionInterface<DocumentInterface>) => void) => {
    return {
        addDocuments: (data: StoreStateInterface<DocumentInterface>) => dispatch({type: StoreActionsEnum.addDocuments, data})
    }
};

export default withRouter(connect(stateToProps, dispatchToProps)(Main));

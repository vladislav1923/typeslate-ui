import {DocumentInterface} from '../../interfaces/document.interface';
import {StoreActionInterface} from '../../interfaces/store-action.interface';
import {StoreActionsEnum} from '../../enums/store-actions.enum';
import {StoreStateModel} from "../../models/store-state.model";

export const documentsReducer = (state: StoreStateModel<DocumentInterface> = new StoreStateModel(), action: StoreActionInterface<DocumentInterface>) => {
    switch(action.type) {
        case StoreActionsEnum.addDocuments:
            return new StoreStateModel<DocumentInterface>(action.data.byId, action.data.allIds);
        default:
            return state;
    }
}


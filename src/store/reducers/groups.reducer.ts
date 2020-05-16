import {StoreActionInterface} from '../../interfaces/store-action.interface';
import {StoreActionsEnum} from '../../enums/store-actions.enum';
import {GroupInterface} from '../../interfaces/group.interface';
import {StoreStateModel} from "../../models/store-state.model";

export const groupsReducer = (state: StoreStateModel<GroupInterface> = new StoreStateModel(), action: StoreActionInterface<GroupInterface>) => {
    switch(action.type) {
        case StoreActionsEnum.addGroups:
            return new StoreStateModel<GroupInterface>(action.data.byId, action.data.allIds);
        default:
            return state;
    }
}


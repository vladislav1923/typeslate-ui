import {StoreActionsEnum} from '../enums/store-actions.enum';
import {StoreStateInterface} from "./store-state.interface";

export interface StoreActionInterface<T> {
    type: StoreActionsEnum;
    data: StoreStateInterface<T>;
}

import {StoreActionInterface} from '../../interfaces/store-action.interface';
import {StoreActionsEnum} from '../../enums/store-actions.enum';
import {ArticleInterface} from '../../interfaces/article.interface';
import {StoreStateModel} from '../../models/store-state.model';

export const articlesReducer = (state: StoreStateModel<ArticleInterface> = new StoreStateModel(), action: StoreActionInterface<ArticleInterface>) => {
    switch(action.type) {
        case StoreActionsEnum.addArticles:
            return new StoreStateModel<ArticleInterface>(action.data.byId, action.data.allIds);
        default:
            return state;
    }
}


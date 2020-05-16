import {combineReducers} from 'redux';
import {documentsReducer} from './documents.reducer';
import {groupsReducer} from './groups.reducer';
import {articlesReducer} from './articles.reducer';

export default combineReducers({
    documents: documentsReducer,
    groups: groupsReducer,
    articles: articlesReducer,
})

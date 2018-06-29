import {combineReducers} from 'redux';
import activeView from './activeView';
import statusInputValue from './statusInputValue';
import statuses from './statuses';
import repos from './repos';

export default combineReducers({
    activeView,
    statuses,
    statusInputValue,
    repos
});

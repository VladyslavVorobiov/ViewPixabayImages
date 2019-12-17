import {combineReducers} from 'redux';
import cardListReducer from './cardList';

export default combineReducers({
	cardList: cardListReducer,
});
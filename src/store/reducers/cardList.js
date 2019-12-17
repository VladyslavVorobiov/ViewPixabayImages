import {GET_DATA_HAS_ERROR,
		DATA_IS_LOADING,
		GET_DATA_HAS_SUCCESS,
		SAVE_NEW_TAG_OF_CARD,
		DELETE_TAG_OF_CARD } from '../actions/actionTypes';

const initialState = {
	apiPixabay: {},
	isLoading: false,
	hasErrored: false,
	isDataRecieved: false
}

export default function cardListReducer(state = initialState, action){
	switch(action.type){
		case DATA_IS_LOADING:
			return {
				...state, isLoading: action.isLoading
			}
		case GET_DATA_HAS_ERROR:
			return{
				...state, hasErrored: action.hasErrored
			}
		case GET_DATA_HAS_SUCCESS:
			return{
				...state, apiPixabay: action.apiPixabay, isDataRecieved: true
			}
		case 'GET_API_PIXABAY':
			return {
				...state
			}
		case SAVE_NEW_TAG_OF_CARD:

			let hits = state.apiPixabay.hits.concat()
			state.apiPixabay.hits = saveNewTag(hits, action.newTag, action.idCard)
			return {
				...state
			}
		case DELETE_TAG_OF_CARD:

			hits = state.apiPixabay.hits.concat()
			state.apiPixabay.hits = deleteTag(hits, action.tag, action.idCard)
			return {
				...state
			}

		default:
			return state;
	}
}

function saveNewTag(items, newTag, id){

	if(!newTag) return items

	for(let i = 0; i < items.length; i++){
		if (items[i].id === id){
			items[i].tags += ', ' + newTag
			break;
		}
	}
	return items
}

function deleteTag(items, tag, id){
	let array, result

	for(let i = 0; i < items.length; i++){
		if (items[i].id === id){
			array = items[i].tags.split(', ')
			result = array.filter(item => item !== tag)
			items[i].tags = result.join(', ')
			break;
		}
	}
	return items
}

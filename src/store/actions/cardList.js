
import axios from 'axios';
import {GET_DATA_HAS_ERROR,
		DATA_IS_LOADING,
		GET_DATA_HAS_SUCCESS,
		SAVE_NEW_TAG_OF_CARD,
		DELETE_TAG_OF_CARD } from './actionTypes';

export function getDataHasError(bool){
	return {
		type: GET_DATA_HAS_ERROR,
		hasErrored: bool
	}
}

export function dataIsLoading(bool){
	return {
		type: DATA_IS_LOADING,
		isLoading: bool
	}
}

export function getDataHasSuccess(data){
	return{
		type: GET_DATA_HAS_SUCCESS,
		apiPixabay: data
	}
}

export function getApiPixabay(){
	return{
		type: 'GET_API_PIXABAY'
	}
}

export function saveNewTagOfCard(newTag, idCard){
	return{
		type: SAVE_NEW_TAG_OF_CARD,
		newTag, idCard
	}
}

export function deleteTagOfCard(tag, idCard){
	return{
		type: DELETE_TAG_OF_CARD,
		tag, idCard
	}
}

export function getDataFromPixabay(url){
	return async dispatch => {
		dispatch(dataIsLoading(true));

		try {
   			const response = await axios.get(url);
   			dispatch(getDataHasSuccess(response.data));
   			dispatch(dataIsLoading(false));
  		} catch (error) {
  			//TODO error handling
  			dispatch(getDataHasError(true));
    		console.error(error);
  		}
	}	
}
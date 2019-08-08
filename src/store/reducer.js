import * as actionTypes from './actions';

const initialState = {
	items: [],
	cart: [],
}

const rootReducer = (state = initialState, action) => {
	switch ( action.type ) {
		case actionTypes.FETCH_ITEMS:
			return {
				...state,
				items: action.payload
			}
		default:
			return state;
	}
};

export default rootReducer;

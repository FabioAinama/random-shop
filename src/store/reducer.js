import * as actionTypes from './actions';

const initialState = {
	items: [],
	cart: [],
};

const remove_item = (state, action) => {
	const updatedCart = state.cart.filter(item => (item.id !== action.id));
	return {
		...state,
		cart: updatedCart
	};
};

const add_item = (state, action) => {
	const result = state.cart.find(item => item.id === action.payload.id)
	if (result) {
		const index = state.cart.indexOf(result)
		state.cart[index].quantity += 1
		return {
			...state,
			cart: [
				...state.cart
			]
		};
	} else {
		return {
			...state,
			cart: [
				...state.cart,
				{
					...action.payload,
					quantity: 1
				}
			]
		};
	};
};

const rootReducer = (state = initialState, action) => {
	switch ( action.type ) {
		case actionTypes.FETCH_ITEMS:
			return {
				...state,
				items: action.payload
			};
		case actionTypes.ADD_CART:
			return add_item(state, action);
		case actionTypes.REMOVE_CART:
			return remove_item(state, action);
		default:
			return state;
	};
};

export default rootReducer;

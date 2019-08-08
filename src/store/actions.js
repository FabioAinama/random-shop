import { fetchItems } from '../utils/api';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ADD_CART = 'ADD_CART';
export const REMOVE_CART = 'REMOVE_CART';

export const load_items = (items) => {
	return {
		type: FETCH_ITEMS,
		payload: items
	};
}

export const fetch_items = () => {
	return async (dispatch) => {
		const payload = await fetchItems();
		dispatch(load_items(payload));
	};
}

export const add_cart = (item) => {
	return {
		type: ADD_CART,
		payload: item
	}
}

export const remove_cart = (item) => {
	return {
		type: REMOVE_CART,
		payload: item
	}
}
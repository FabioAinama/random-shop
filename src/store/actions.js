import { fetchItems } from '../utils/api';

export const FETCH_ITEMS = 'FETCH_ITEMS';

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

import React from 'react';
// import { connect } from 'react-redux';
// import * as actionCreators from '../store/actions';

const Cart = (props) => {
	console.log(props)
	return (
		<div>
			Cart Component
			<p>Number of items: </p>
			<ul>
				{props.cart.map(item => <li key={item.id}>{item.title}</li>)}
			</ul>
		</div>
	)
}

// export default connect()(Cart);
export default Cart;
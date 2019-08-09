import React from 'react';
import { List, Button, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

const Cart = (props) => {
	const count = props.cart.reduce((a, b) => ( a + b.quantity), 0)
	return (
		<aside>
			Your Cart:
			<List dense>
				{props.cart.map((item) => {
					return (
						<React.Fragment key={item.id}>
							<ListItem button>
								<ListItemAvatar>
									<Avatar
										alt={item.title}
										src={item.thumbnailUrl}
									/>
								</ListItemAvatar>
								<ListItemText primary={item.title} />
								<ListItemText secondary={item.quantity} />
							</ListItem>
							<Button variant="outlined" color="primary" onClick={() => props.onRemoveCard(item.id)}>Delete</Button>
						</React.Fragment>
					)
				})}
			</List>
			<p>Number of items: {count}</p>
		</aside>
	)
}

export default Cart;
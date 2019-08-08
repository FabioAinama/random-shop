import React from 'react'

const ItemCard = ({item, addToCard}) => {
	return (
		<div>
			<img src={item.thumbnailUrl} alt={item.title} />
			<h3>{item.title}</h3>
			<button onClick={() => addToCard(item)} >Add</button>
		</div>
	)
}

export default ItemCard
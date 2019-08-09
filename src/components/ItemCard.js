import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	card: {
		display: 'inline-block',
		margin: '5px',
		width: 200,
		height: 260,
	},
});

const ItemCard = ({item, addToCard}) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt={item.title}
					height="150"
					image={item.thumbnailUrl}
					title={item.title}
				/>
				<CardContent>
					<Typography gutterBottom variant="subtitle1" component="h2" noWrap>
						{item.title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" variant="contained" color="secondary" onClick={() => addToCard(item)}>Add</Button>
			</CardActions>
		</Card>
	)
}

export default ItemCard
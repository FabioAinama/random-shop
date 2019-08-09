import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import { Container, Button, Box, TextField } from '@material-ui/core';
import styles from './shop.module.css'

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			loading: true
		}
	}

	componentDidMount() {
		this.props.onFetchItems();
		const indexOfString = this.props.location.search.indexOf('page=');
		let currentPage = parseInt(this.props.location.search.substring(indexOfString + 5));
		currentPage = currentPage > 0 ? currentPage : 1;
		this.setState({
			loading: false,
			page: currentPage,
		})
	};
	
	onChangePage = (action) => {
		let nextPage = 0;
		this.setState({loading: true})
		if (action === 'previous') {
			nextPage--;
		}
		else if (action === 'next') {
			nextPage++;
		}
		this.setState(prevState => ({
			page: prevState.page + nextPage,
			loading: false
		}), this.props.history.push(`/shop/?page=${this.state.page + nextPage}`))
		window.scrollTo(0, 0)
	}

	onSearch = event => {
		this.setState({search: event.target.value})
	}
	
	render() {
		// Pagination
		const pagination = [];
		const searchArray = this.state.search === '' ? this.props.items : this.props.items.filter(item => item.title.includes(this.state.search));
		for (const item of searchArray) {
			if (item.id > (this.state.page * 15) && pagination.length > 15)
				break
			else if (item.id <= (this.state.page * 15 - 15))
				continue
			else
				pagination.push(item);
		}

		return (
			<Container maxWidth="lg" className={styles.gridContainer}>
				<main>
					<h1>Random Shop</h1>
					<Box className={styles.buttonLine}>
						<TextField
							label="Search"
							value={this.state.search}
							onChange={this.onSearch}
							margin="normal"
						/>
					</Box>
					{pagination.map(item => {
						return <ItemCard key={item.id} item={item} addToCard={this.props.onAddCard} />
					})}
					<Box className={styles.buttonLine}>
						{this.state.page !== 1 && <Button variant="contained" color="primary" onClick={() => this.onChangePage('previous')}>Previous</Button>}
						<Button variant="contained" color="primary" onClick={() => this.onChangePage('next')}>
							Next
						</Button>
					</Box>
				</main>
				<Cart cart={this.props.cart} onRemoveCard={this.props.onRemoveCard} />
			</Container>
		);
	};
};

const mapStateToProps = state => {
	return {
		items: state.items,
		cart: state.cart
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchItems: () => dispatch(actionCreators.fetch_items()),
		onAddCard: (item) => dispatch(actionCreators.add_cart(item)),
		onRemoveCard: (id) => dispatch(actionCreators.remove_cart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
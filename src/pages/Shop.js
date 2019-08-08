import React, { Component } from 'react';
import ItemCard from '../components/ItemCard';
import Cart from '../components/Cart';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';

class Shop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// page: 1,
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
		
	}

	render() {
		console.log(this.state)
		const pagination = [];
		for (const item of this.props.items) {
			if (item.id > (this.state.page * 15))
				break
			else if (item.id <= (this.state.page * 15 - 15))
				continue
			else
				pagination.push(item);
		}

		return (
			<div>
				<Cart cart={this.props.cart} />
				Random Shop
				{pagination.map(item => {
					return <ItemCard key={item.id} item={item} addToCard={this.props.onAddCard} />
				})}
				{this.state.page !== 1 && <button onClick={() => this.onChangePage('previous')}>Previous</button>}
				<button onClick={() => this.onChangePage('next')}>Next</button>
			</div>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
import React, { Component } from 'react';
import ItemCard from '../components/ItemCard'
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';

class Shop extends Component {
	componentDidMount() {
		this.props.onFetchItems();
	};

	render() {
		return (
			<div>
				Random Shop
				{this.props.items.map(item => {
					return <ItemCard key={item.id} item={item} />
				})}
			</div>
		);
	};
};

const mapStateToProps = state => {
	return {
		items: state.items,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchItems: () => dispatch(actionCreators.fetch_items()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
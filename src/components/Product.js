import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const Product = props => {
	const { cart } = useContext(CartContext)

	let inCart = false

	cart.forEach(item => {
		if (item.id === props.product.id) {
			inCart = true
		}
	})

	return (
		<div className="product">
			<img src={props.product.image} alt={`${props.product.title} book`} />

			<h1 className="title">{props.product.title}</h1>

			<p className="price">${props.product.price}</p>

			<button style={{ background: inCart ? 'lightcoral' : null, color: inCart ? 'white' : null }} disabled={inCart} onClick={() => props.addItem(props.product)}>
				{inCart ? 'In cart' : 'Add to cart'}
			</button>
		</div>
	);
};

export default Product;

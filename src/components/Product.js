import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

const Product = props => {
	const { cart, removeItem } = useContext(CartContext)

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


			{
				inCart ?
					<button onClick={() => removeItem(props.product)}>
						In Cart
					</button>
					:
					<button onClick={() => props.addItem(props.product)}>
						Add to Cart
					</button>
			}
		</div>
	);
};

export default Product;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const updatedCart = [...cart, item]
		setCart(updatedCart)
	};

	const removeItem = item => {
		const updatedCart = cart.filter(it => it.id !== item.id)
		setCart(updatedCart)
	}

	useEffect(() => {
		const item = window.localStorage.getItem('cart')
		item && setCart(JSON.parse(item))
	}, [])

	useEffect(() => {
		window.localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{ cart, removeItem }}>
				<div className="App">
					<Navigation />

					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

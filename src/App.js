import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

///context
import { ProductContext } from './context/ProductContext'
import { CartContext } from './context/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	
	const removeItem = id => {
		const newCart = cart.filter(item => item.id !== id)
		setCart([...newCart])
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{cart, removeItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
			/>

			<Route
				path="/cart"
				component={ShoppingCart}
				/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;

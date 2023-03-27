import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import Products from "./Components/Products";
import SingleProduct from "./Components/SingleProduct";
import ErrorPage from "./Components/ErrorPage";
import About from "./Components/About";
const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/products" element={<Products />} />
					<Route path="/productDetails" element={<SingleProduct />} />
					<Route path="/Cart" element={<Cart />} />
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;

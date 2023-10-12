import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Component/Home";
import Service from "./Component/Service";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Product from "./Component/Product";
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/service" element={<Service />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/product/:id" element={<Product />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;

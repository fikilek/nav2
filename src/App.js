import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Asts from "./pages/asts/Asts";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/asts" element={<Asts />} />
					<Route path="/asts" element={<Asts />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

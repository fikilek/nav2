import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TestDropdown from "./components/test-components/test-dropdown/TestDropdown";
import testTreeData from "./components/test-components/test-dropdown/testTreeData";
import treeData from "./data/treeData";
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
          {/* td - test drppdown */}
					{/* <Route path="/td" element={<TestDropdown treeData={testTreeData} />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

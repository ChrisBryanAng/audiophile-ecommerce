import { Routes, Route } from "react-router-dom";

import { Home } from "./pages";
import { Navbar } from "./components";

const App = () => {
	return (
		<div className="h-dvh w-dvw font-Manrope overflow-x-hidden">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BottomNavBar from "./BottomNavBar";
import MainContent from "./MainContent";

function App() {
	const [navValue, setNavValue] = useState(0);

	return (
		<>
			
			<MainContent />
			<BottomNavBar
				value={navValue}
				onChange={(event, newValue) => setNavValue(newValue)}
			/>
		</>
	);
}

export default App;

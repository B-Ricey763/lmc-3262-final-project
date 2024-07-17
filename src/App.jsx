import { useState } from "react";
import "./App.css";
import BottomNavBar from "./BottomNavBar";
import MainContent from "./MainContent";

function App() {
  const [navValue, setNavValue] = useState(0);

  return (
    <>
      hello world
      <MainContent />
      <BottomNavBar
        value={navValue}
        onChange={(event, newValue) => setNavValue(newValue)}
      />
    </>
  );
}

export default App;

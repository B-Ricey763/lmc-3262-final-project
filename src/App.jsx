import { useState } from "react";
import "./App.css";
import BottomNavBar from "./BottomNavBar";
import GoogleMyMaps from "./GoogleMyMaps";
import Pictures from "../Pictures";
import { Paper } from "@mui/material";
import React from "react";
import NotesDisplay from "./NotesDisplay";

function App() {
  const [navValue, setNavValue] = useState("");
  const [unlockedNoteIds, setUnlockedNoteIds] = useState([]);

  let content = <Pictures />;
  if (navValue === "maps") {
    content = <GoogleMyMaps />;
  } else if (navValue === "notes") {
    content = (
      <NotesDisplay
        unlockedNoteIds={unlockedNoteIds}
        setUnlockedNoteIds={setUnlockedNoteIds}
      />
    );
  }

  return (
    <>
      {content}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavBar
          value={navValue}
          onChange={(event, newValue) => setNavValue(newValue)}
        />
      </Paper>
    </>
  );
}

export default App;

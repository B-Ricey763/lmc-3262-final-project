import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MapIcon from "@mui/icons-material/Map";
import NoteIcon from "@mui/icons-material/Note";
import PhotoIcon from "@mui/icons-material/Photo";

const BottomNavBar = ({ value, onChange }) => {
	return (
		<BottomNavigation value={value} onChange={onChange} showLabels>
			<BottomNavigationAction label="Maps" icon={<MapIcon />} />
			<BottomNavigationAction label="Notes" icon={<NoteIcon />} />
			<BottomNavigationAction label="Photos" icon={<PhotoIcon />} />
		</BottomNavigation>
	);
};

export default BottomNavBar;

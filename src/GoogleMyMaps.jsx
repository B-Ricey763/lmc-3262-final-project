import React from "react";

const GoogleMyMaps = () => {
  return (
    <div style={{ height: "calc(100vh - 56px)", overflow: "hidden" }}>
      <iframe
        title="hello"
        src="https://www.google.com/maps/d/embed?mid=1j6rk2kCP6c-CwUsEJ0vFpHcZxAvLozw&ehbc=2E312F"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default GoogleMyMaps;

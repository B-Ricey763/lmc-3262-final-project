import React from "react";

const Maps = () => {
  return (
    <div style={{ height: "calc(100vh - 56px)", overflow: "hidden" }}>
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1JMzV-3cURIXzubDCXhFr0vWHJV1kHyU&usp=sharing"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google MyMap"
      />
    </div>
  );
};

export default Maps;

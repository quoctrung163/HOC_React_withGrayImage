import React from "react";

export default ({ src, width = 300, height = 200 }) => {
  return (
    <div
      className="GrayImage"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px"
      }}
    />
  );
};

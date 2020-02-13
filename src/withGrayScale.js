import React from "react";

export default (WrappedComponent, value) => {
  return props => {
    return (
      <div
        style={{
          filter: `grayscale(${value})`
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

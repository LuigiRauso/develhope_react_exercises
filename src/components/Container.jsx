import React from "react";

const Container = ({ children }) => {
  return (
    <div className="p-6 bg-white border-4 border-red-500 rounded-lg shadow-lg">
      {children}
    </div>
  );
};

export default Container;

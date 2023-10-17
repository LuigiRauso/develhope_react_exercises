import React from "react";

const Container = ({ title, children }) => {
  return (
    <div className="p-6 bg-white border-4 border-red-500 rounded-lg shadow-lg">
      <h1 className="mb-4 text-4xl font-bold text-blue-600">{title}</h1>
      {children}
    </div>
  );
};

export default Container;

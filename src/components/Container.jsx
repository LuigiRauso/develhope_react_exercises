import React, { useState } from "react";

const Container = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleTitleOnClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="p-6 bg-white border-4 border-red-500 rounded-lg shadow-lg">
      <h1
        className="mb-4 text-4xl font-bold text-blue-600"
        onClick={handleTitleOnClick}
      >
        {title}
      </h1>
      {!isCollapsed && children}
    </div>
  );
};

export default Container;

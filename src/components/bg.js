import React from "react";

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Top-left green circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Bottom-right green circle */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full translate-x-1/2 translate-y-1/2 z-0" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;

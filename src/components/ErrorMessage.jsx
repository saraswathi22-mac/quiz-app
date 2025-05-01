import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div className="w-full bg-red-500 text-center text-white capitalize p-3 rounded">
      {children}
    </div>
  );
};

export default ErrorMessage;

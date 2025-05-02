import React from "react";

const ErrorMessage = ({ children, className = "" }) => {
  return (
    <div
      role="alert"
      className={`w-full bg-red-500 text-center text-white capitalize p-3 rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default ErrorMessage;

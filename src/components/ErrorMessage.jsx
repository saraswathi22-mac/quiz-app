import React from "react";

const ErrorMessage = ({ children }) => {
  return (
    <div className="w-full bg-red-500 text-center text-white capitalize mb-5 p-3 rounded">
      {children}
    </div>
  );
};

export default ErrorMessage;

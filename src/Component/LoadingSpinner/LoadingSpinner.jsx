import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-7xl font-thin">L</p>
      <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400"></div>
      <p className="text-7xl font-thin">ading....</p>
    </div>
  );
};

export default LoadingSpinner;

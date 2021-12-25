import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="progress myLoading">
        <div
          className="progress-bar myBar"
          role="progressbar"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Loading;

import React from "react";

const ErrorMsg = (props) => {
  return (
    <div className="container ">
      <div className="alert alert-danger m-5" role="alert">
        {props.msg === "Failed to fetch" ? "Check the internet" : props.msg} !
      </div>
    </div>
  );
};

export default ErrorMsg;

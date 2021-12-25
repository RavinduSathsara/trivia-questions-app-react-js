import React from "react";

const Question = (props) => {
  return (
    <div>
      <div className="alert alert-success mt-3 col-12" role="alert">
        <h4 className="alert-heading">Question no {props.queNo} !</h4>
        <p>{props.que}</p>
        <hr />
        <p className="mb-0">
          answer :{" "}
          {props.showAns ? "Want see answer click button below" : props.answer}
        </p>
      </div>
    </div>
  );
};

export default Question;

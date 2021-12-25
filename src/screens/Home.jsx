import React, { useState, useEffect } from "react";
import Question from "../components/Question";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [showAns, setShowAns] = useState(true);
  const [que, setQue] = useState(1);

  //useEffect
  useEffect(() => {
    fetch("https://jservice.io/api/random")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [que]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        {items.map((item) => (
          <Question
            que={item.question}
            queNo={que}
            answer={item.answer}
            showAns={showAns}
          />
        ))}
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            setQue(que + 1);
          }}
        >
          random
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            showAns ? setShowAns(false) : setShowAns(true);
          }}
        >
          {showAns ? "Show Ans" : "Hide Ans"}
        </button>
      </div>
    );
  }
};

export default Home;

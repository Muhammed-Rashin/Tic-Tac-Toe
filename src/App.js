import React, { useEffect, useState } from "react";
import "./App.css";
import Confetti from "react-confetti";

function App() {
  const [next, setNext] = useState(false);
  const [result, setResult] = useState();
  const [value, setValue] = useState({
    first: "none",
    second: "none",
    third: "none",
    fourth: "none",
    fifth: "none",
    sixth: "none",
    seventh: "none",
    eighth: "none",
    nineth: "none",
  });
  const handleClick = (box) => {
    if (value[box] !== "none") return;
    setValue({
      ...value,
      [box]: !next,
    });
    setNext(!next);
  };
  useEffect(() => {
    if (
      value.first === value.second &&
      value.second === value.third &&
      value.first !== "none"
    ) {
      if (value.first) setResult("X");
      else setResult("O");
    }
    if (
      value.fourth === value.fifth &&
      value.fifth === value.sixth &&
      value.fourth !== "none"
    ) {
      if (value.fourth) setResult("X");
      else setResult("O");
    }
    if (
      value.seventh === value.eighth &&
      value.eighth === value.nineth &&
      value.seventh !== "none"
    ) {
      if (value.seventh) setResult("X");
      else setResult("O");
    }
    if (
      value.first === value.fourth &&
      value.fourth === value.seventh &&
      value.first !== "none"
    ) {
      if (value.first) setResult("X");
      else setResult("O");
    }
    if (
      value.second === value.fifth &&
      value.fifth === value.eighth &&
      value.second !== "none"
    ) {
      if (value.second) setResult("X");
      else setResult("O");
    }
    if (
      value.third === value.sixth &&
      value.sixth === value.nineth &&
      value.third !== "none"
    ) {
      if (value.third) setResult("X");
      else setResult("O");
    }
    if (
      value.first === value.fifth &&
      value.fifth === value.nineth &&
      value.first !== "none"
    ) {
      if (value.first) setResult("X");
      else setResult("O");
    }
    if (
      value.third === value.fifth &&
      value.fifth === value.seventh &&
      value.third !== "none"
    ) {
      if (value.third) setResult("X");
      else setResult("O");
    }
    if (
      value.first !== "none" &&
      value.second !== "none" &&
      value.third !== "none" &&
      value.fourth !== "none" &&
      value.fifth !== "none" &&
      value.sixth !== "none" &&
      value.seventh !== "none" &&
      value.eighth !== "none" &&
      value.nineth !== "none"
    )
      setResult("Draw");
  }, [value]);
  return (
    <div className="app">
      <div className="container">
        <div className="box box-1" onClick={() => handleClick("first")}>
          {value.first === "none" ? null : value.first ? "X" : "O"}
        </div>
        <div className="box box-2" onClick={() => handleClick("second")}>
          {value.second === "none" ? null : value.second ? "X" : "O"}
        </div>
        <div className="box box-3" onClick={() => handleClick("third")}>
          {value.third === "none" ? null : value.third ? "X" : "O"}
        </div>
        <div className="box box-4" onClick={() => handleClick("fourth")}>
          {value.fourth === "none" ? null : value.fourth ? "X" : "O"}
        </div>
        <div className="box box-5" onClick={() => handleClick("fifth")}>
          {value.fifth === "none" ? null : value.fifth ? "X" : "O"}
        </div>
        <div className="box box-6" onClick={() => handleClick("sixth")}>
          {value.sixth === "none" ? null : value.sixth ? "X" : "O"}
        </div>
        <div className="box box-7" onClick={() => handleClick("seventh")}>
          {value.seventh === "none" ? null : value.seventh ? "X" : "O"}
        </div>
        <div className="box box-8" onClick={() => handleClick("eighth")}>
          {value.eighth === "none" ? null : value.eighth ? "X" : "O"}
        </div>
        <div className="box box-9" onClick={() => handleClick("nineth")}>
          {value.nineth === "none" ? null : value.nineth ? "X" : "O"}
        </div>
      </div>
      {/* 
    {
      result ? 
      <div>

        <Confetti
    width={1500}
    height={1000}
    />
    <button>
      Rematch
    </button>
      </div>
      
       :null
    } */}
      {result === "Draw" ? (
        <div className="result-display">
          <h1>Draw</h1>
          <button onClick={() => (window.location = "/")}>Rematch</button>
        </div>
      ) : result ? (
        <div className="result-display">
          <h1>{result} WON</h1>
          <button onClick={() => (window.location = "/")}>Rematch</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;

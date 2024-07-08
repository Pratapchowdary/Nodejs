import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function onIncrease() {
    setCount((prev) => prev + 1);
  }

  function onReset() {
    setCount(0);
  }

  function onDecrease() {
    setCount((prev) => prev - 1);
  }

  let className;
  if (count > 0) {
    className = "text-success";
  } else if (count < 0) {
    className = "text-danger";
  } else {
    className = "text-dark";
  }

  return (
    <div className="text-center">
      <h1 className={className}>{count}</h1>
      <button onClick={onDecrease} className="btn btn-danger m-3">
        Decrease
      </button>
      <button onClick={onReset} className="btn btn-light m-3">
        Reset
      </button>
      <button onClick={onIncrease} className="btn btn-success m-3">
        Increase
      </button>
    </div>
  );
}

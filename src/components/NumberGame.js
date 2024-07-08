import React, { useState } from "react";

export default function NumberGame() {
  const [num, setNum] = useState("");
  const [guessResult, setGuessResult] = useState("");
  const [className, setClassName] = useState("");

  function onInput(e) {
    setNum(e.target.value);
  }

  function handleGuess() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    const guessedNumber = parseInt(num);
    let resultText, resultClassName;

    if (isNaN(guessedNumber)) {
      resultText = "Please enter a valid number.";
      resultClassName = "text-danger";
    } else {
      if (guessedNumber === randomNumber) {
        resultText = "Congratulations! You guessed the correct number.";
        resultClassName = "text-success";
      } else {
        resultText = `Sorry, the correct number was ${randomNumber}. Try again!`;
        resultClassName = "text-danger";
      }
    }

    setGuessResult(resultText);
    setClassName(resultClassName);
  }

  return (
    <div className="text-center m-5 p-5">
      <input
        type="number"
        placeholder="Enter your guess"
        value={num}
        onChange={onInput}
      />
      <button onClick={handleGuess}>Guess</button>
      <p className={className}>{guessResult}</p>
    </div>
  );
}

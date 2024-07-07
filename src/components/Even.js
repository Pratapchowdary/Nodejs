import React from "react";

export default function Even() {
  let nameArray = [1, 2, 3, 4, 5, 6];
  let evenNumbers = nameArray.filter(function (num) {
    return num % 2 === 0;
  });
  return (
    <div className="text-center justify-content-center;">
      {evenNumbers.map(function (num) {
        return (
          <div>
            <h1>{num}</h1>
          </div>
        );
      })}
    </div>
  );
}
"use client";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="main" className="center">
        <div id="app" className="center">
          <button
            id="increment"
            className="btn center"
            onClick={() => {
              setCount(count-1)
            }}
          >
            -
          </button>
          <span className="result center">{count}</span>
          <button
            id="decrement"
            className="btn center"
            onClick={() => {
              setCount(count+1)
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};
export default page;

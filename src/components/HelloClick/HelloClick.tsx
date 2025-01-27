import React from "react";

export default function HelloClick () {
  let buttonWasClicked = false;

  return (
    <>
      <button className="bg-blue-100 border"
        onClick={() => buttonWasClicked = !buttonWasClicked}
      >
        say hello!
      </button>
      <p>
        {buttonWasClicked ? 'Hello button' : 'Hello World'}
      </p>
    </>
  );
}

import React, { useState } from "react";

export default function HelloClick () {
  const [buttonWasClicked, setButtonWasClicked] = useState<boolean>(false);

  return (
    <>
      <button className="bg-blue-100 border"
        onClick={() => setButtonWasClicked(!buttonWasClicked)}
      >
        say hello!
      </button>
      <p>
        {buttonWasClicked ? 'Hello button' : 'Hello World'}
      </p>
    </>
  );
}

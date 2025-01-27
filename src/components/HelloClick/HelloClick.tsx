import React, { useState } from "react";

export default function HelloClick () {
  const [buttonWasClicked, setButtonWasClicked]
    = useState<boolean>(false);

  return (
    <>
      <button className="bg-blue-100 border"
              role='button'
        onClick={() => setButtonWasClicked(!buttonWasClicked)}
      >
        say hello
      </button>
      <p data-testid='button-clicked'>
        {buttonWasClicked ? 'Hello button!' : 'Hello World!'}
      </p>
    </>
  );
}

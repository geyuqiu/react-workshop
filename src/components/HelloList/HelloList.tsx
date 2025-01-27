import React from "react";
export default function HelloList () {
  const names: string[] = ["A", "B", "C"];
  // names.push('D') // valid
  // names[0] = ('D') // valid

  return (
    <ul>
      {
        names.map((name, i) =>
          <li data-testid='hello-list' key={i}>Hello {name}</li>
        )
      }
    </ul>
  );
}

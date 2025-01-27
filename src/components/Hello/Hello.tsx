import React from "react";
export default function Hello () {
  const p = 'test'
  return (
    <p className="text-xs bg-red-700"> {/* jsx keyword className */}
      {p}
    </p>
  );
}

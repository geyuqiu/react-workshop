import React from 'react';
import './App.css';

function App() {
  const p = 'test'
  return (
    <p className="text-xs red"> {/* jsx keyword className */}
      {p}
    </p>
  );
}

export default App;

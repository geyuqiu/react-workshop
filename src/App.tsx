import React from 'react';
import Hello from './components/Hello/Hello';
import HelloList from './components/HelloList/HelloList';
import HelloClick from './components/HelloClick/HelloClick';

function App() {
  return(
    <>
      <Hello name="Felix"/>
      <HelloList />
      <HelloClick />
    </>
  )
}

export default App;

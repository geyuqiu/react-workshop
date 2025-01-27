import React from 'react';
import Hello from './components/Hello/Hello';
import HelloList from './components/HelloList/HelloList';
import HelloClick from './components/HelloClick/HelloClick';
import NameInput from './components/NameInput/NameInput';

function App() {
  const [name, setName] = React.useState('');

  return(
    <>
      <Hello name="Felix"/>
      <HelloList />
      <HelloClick />

      <NameInput name={name} setName={setName}/>
    </>
  )
}

export default App;

import React, {useState} from 'react';
import Hello from './components/Hello/Hello';
import HelloList from './components/HelloList/HelloList';
import HelloClick from './components/HelloClick/HelloClick';
import NameInput from "./components/NameInput/NameInput";
import Uncontrolled from "./components/Uncontrolled/Uncontrolled";

function App() {
    const [name, setName]
        = useState<string>('');

    return (
        <>
            <Hello name="Felix"/>
            <Hello/>
            <HelloList/>
            <HelloClick/>
            <NameInput name={name} setName={setName}/>
            <Uncontrolled setName={setName}/>
        </>
    )
}

export default App;

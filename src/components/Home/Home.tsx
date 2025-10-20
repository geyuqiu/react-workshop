import React, {useState} from "react";
import Hello from "../Hello/Hello";
import HelloList from "../HelloList/HelloList";
import HelloClick from "../HelloClick/HelloClick";
import NameInput from "../NameInput/NameInput";
import Uncontrolled from "../Uncontrolled/Uncontrolled";

export default function Home() {
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
    );
}

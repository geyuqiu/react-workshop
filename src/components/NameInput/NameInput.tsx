import React, { FormEvent } from "react";

interface NameInputProps {
	name: string,
	setName: (name:string) => void
}

export default function NameInput({name, setName}: NameInputProps) {
  function onInput(e: FormEvent<HTMLInputElement>) {
    console.log("onInput", (e.target as HTMLInputElement).value);
    setName((e.target as HTMLInputElement).value);
  }

  return (
		<input value={name} onChange={e => onInput(e)}
			className="border-2" role='name-input'
		/>
	);
}

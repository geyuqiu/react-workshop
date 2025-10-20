import React, {FormEvent, useRef} from "react";

interface UncontrolledProps {
    setName: (name: string) => void
}

export default function Uncontrolled({setName}: UncontrolledProps) {
    const refContainer
        = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        console.info('submitted: ', refContainer);
        setName(refContainer?.current?.value as string);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className='border-2' role='name-input' ref={refContainer}
            />
            <button className='border-2' type='submit'>submit</button>
        </form>
    );
}

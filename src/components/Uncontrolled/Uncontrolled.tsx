import React, { useRef, FormEvent, useActionState } from "react";

interface UncontrolledProps {
    setName: (name: string) => void;
}

export default function Uncontrolled({ setName }: UncontrolledProps) {
    const refContainer = useRef<HTMLInputElement>(null);

    async function updateName(_: unknown, formData: FormData) {
        const name = formData.get("name") as string;

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setName(name);
        return name;
    }

    const [state, formAction, isPending] = useActionState(updateName, "");

    return (
        <form action={formAction}>
            <input
                className="border-2"
                name="name"
                ref={refContainer}
                defaultValue={state}
            />
            <button className="border-2" type="submit" disabled={isPending}>
                {isPending ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
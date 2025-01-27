import React from "react";

interface HelloProps {
	name?: string
}

export default function Hello({name = 'Hello World!'}: HelloProps) {
	return (
		<p className="text-xs bg-red-700"> {/* jsx keyword className */}
			{name}
		</p>
	);
}

import React from "react";

interface HelloProps {
	name?: string
}

export default function Hello({name}: HelloProps) {
	return name
	  ? (
		<p className="text-xs bg-red-700"> {/* jsx keyword className */}
			Hallo {name}!
		</p>
	  )
		: (
			<p className="text-xs bg-red-700">Hallo World!</p>
		);
}

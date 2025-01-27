import React from "react";

interface HelloProps {
	name?: string
}

export default function Hello({name}: HelloProps) {
	// `ddfd${name}dfd` = 'ddfd' + name + 'dfd'
	return (
		<p className="text-xs bg-red-700"> {/* jsx keyword className */}
			Hallo {name ? `${name}` : 'world'}!
		</p>
	);
}

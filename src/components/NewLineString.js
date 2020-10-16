import React from "react";

const NewLineString = ({ text }) => {
	const newText = text.split("\n").map(str => <p>{str}</p>);
	return newText;
};

export default NewLineString;

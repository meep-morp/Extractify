import React from "react";
import PDFDisplay from "./PDFDisplay";

const PDFGrid = ({ list }) => {
	if (!list) {
		list = [];
	}

	return (
		<div className="grid">
			{list.length === 0 &&
				<div className="center output">
					<h2>Upload a PDF file to view it's text contents.</h2>
				</div>}
			{list.map(item => (
				<PDFDisplay data={item} />
			))}
		</div>
	);
};

export default PDFGrid;

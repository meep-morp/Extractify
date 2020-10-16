import React from "react";
import { useState } from "react";
import Converter from "./Converter";

const type = "application/pdf";

const AddPDFForm = props => {
	const [file, setFile] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleChange = e => {
		let selected = e.target.files[0];

		if (selected && type === selected.type) {
			setFile(selected);
			setError("");
		} else {
			setFile(null);
			setError("Please select a PDF file");
		}
		setLoading(true);
	};

	return (
		<form>
			{file && loading ? (
				<Converter file={file} setFile={setFile} setLoading={setLoading} />
			) : (
				<label>
					<input type="file" onChange={handleChange} />
					<span>+</span>
				</label>
			)}

			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
			</div>
		</form>
	);
};

export default AddPDFForm;

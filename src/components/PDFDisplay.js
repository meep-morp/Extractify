import React from "react";
import NewLineString from "./NewLineString";
import { DeleteTwoTone } from "@ant-design/icons";
import { fireStore } from "../config/firebase";

const PDFDisplay = ({ data }) => {
	if (!data) {
		data = {};
	} else {
		data = data.data();
	}

	const onDeleteHandler = (fileName) => {
		fireStore
			.collection(window.localStorage
				.getItem("extract-id"))
			.doc(fileName)
			.delete()
			.then(res => {
				window.location.reload();
			})
	}

	return (
		<div className="display-container">
			<div className="title">
				<h3>{data.fileName}</h3>
				<DeleteTwoTone onClick={() => onDeleteHandler(data.fileName)} className="icon delete" twoToneColor="#ee6565" />
			</div>
			<div className="display">
				<NewLineString text={data.text} />
			</div>
		</div>
	);
};

export default PDFDisplay;

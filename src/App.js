import { Spin } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddPDFForm from "./components/AddPDFForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PDFGrid from "./components/PDFGrid";
import { useCollection } from "./hooks/useCollection";
import "./styles/Global.css";

function App() {
	const [id, setId] = useState(window.localStorage.getItem("extract-id"));
	let tempId = uuidv4();

	useEffect(() => {
		if (!id) {
			window.localStorage.setItem("extract-id", tempId);
			setId(tempId);
		}
	}, [id, tempId]);

	const { collection, loading } = useCollection(id);

	return (
		<div className="App">
			<Header />
			<AddPDFForm />
			{loading ? (
				<div style={{ height: "40vh" }}>
					{" "}
					<Spin size="large" />{" "}
				</div>
			) : (
				<PDFGrid list={collection} />
			)}
			<Footer />
		</div>
	);
}

export default App;

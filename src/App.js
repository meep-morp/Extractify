import React from "react";
import AddPDFForm from "./components/AddPDFForm";
import Header from "./components/Header";
import "./styles/Global.css";

function App() {
	return (
		<div className="App">
			<Header />
			<AddPDFForm />
		</div>
	);
}

export default App;

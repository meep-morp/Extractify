import { Progress } from "antd";
import React, { useEffect } from "react";
import { useStorage } from "../hooks/useStorage";

const errorGradient = {
	"0%": "#ee6565",
	"100%": "orange",
};
const normalGradient = {
	"0%": "#40c6f7",
	"100%": "#fcfd8d",
};

const Converter = ({ file, setFile, setLoading }) => {
	const id = window.localStorage.getItem("extract-id");
	const { progress, error } = useStorage(file, id);

	useEffect(() => {
		setTimeout(() => {
			if (progress === 100) {
				setLoading(false);
				setFile(null);
			}
		}, [1000]);
	}, [progress, setFile, setLoading]);

	return (
		<>
			<div className="progress">
				<Progress
					status={error && "exception"}
					style={{ margin: "20px 0", color: error ? "#ee6565" : "black" }}
					type="circle"
					percent={progress}
					strokeColor={error ? errorGradient : normalGradient}
					width={80}
				/>
			</div>
			<div className="error">{error && error.message_}</div>
		</>
	);
};

export default Converter;

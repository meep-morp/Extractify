import { Progress, Spin } from "antd";
import React, { useEffect, useState } from "react";
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
	const [receive, setReceiving] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			if (progress === 100) {
				setReceiving(true);
			}
		}, [1000]);
	}, [progress, setFile, setLoading]);

	return (
		<>
			<div className="progress">
				{receive ? (
					<Spin size="large" />
				) : (
					<Progress
						status={error && "exception"}
						style={{ margin: "20px 0", color: error ? "#ee6565" : "black" }}
						type="circle"
						percent={progress}
						strokeColor={error ? errorGradient : normalGradient}
						width={80}
					/>
				)}
			</div>
			<div className="error">{error && error.message_}</div>
		</>
	);
};

export default Converter;

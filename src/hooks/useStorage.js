import { storage } from "firebase";
import { useEffect, useState } from "react";

export const useStorage = file => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// References
		const storageRef = storage.ref(file.name);
		storageRef.put(file).on(
			"state_changed",
			snapshot => {
				// Calculate the progress of upload
				let percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(percentage);
			},
			error => {
				// Catch any errors
				setError(error);
			},
			// Get URL when completed
			async () => {
				const url = await storageRef.getDownloadUrl();
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

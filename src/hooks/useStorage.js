import { storage, fireStore } from "../config/firebase";
import { useEffect, useState } from "react";
import axios from "axios";

export const useStorage = (file, id) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		// Reference to browser and file
		const storageRef = storage.ref(`/pdf/${id}`).child(file.name);
		storageRef.put(file).on(
			"state_changed",
			snapshot => {
				// Calculate the progress of upload
				let percentage =
					Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(percentage);
			},
			error => {
				// Catch any errors
				console.log(error);
				setError(error);
			},
			// Get URL when completed and Convert to text via Cloud Function
			async () => {
				const url = await storageRef.getDownloadURL();
				console.log(url);
				const data = { path: url };
				axios
					.post(
						"https://us-central1-extractify-bba82.cloudfunctions.net/convert/convert",
						data
					)
					.then(response => {
						console.log(response);
						const text = response.data.text;
						const fireData = { url, text, fileName: file.name };
						console.log(fireData);
						fireStore.collection(id).doc(file.name).set(fireData);
						setTimeout(() => {
							window.location.reload();
						}, 1000);
					})
					.catch(err => {
						console.log(err);
					});
			}
		);
	}, [file, id]);

	return { progress, url, error };
};

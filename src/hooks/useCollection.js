import { fireStore } from "../config/firebase";
import { useEffect, useState } from "react";

export const useCollection = id => {
	const [collection, setCollection] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fireStore
			.collection(id)
			.get()
			.then(snapshot => {
				setLoading(false);
				setCollection(snapshot.docs);
			});
	}, [id]);

	return { collection, loading };
};

export const addPDF = pdf => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// Makes async call to store new pdf in database
		const firestore = getFirestore();
		firestore.collection("pdfs").add({});
		dispatch({ type: "ADD_PDF", pdf });
	};
};

const initialState = {
	pdfList: [],
};

const pdfReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case "ADD_PDF":
			console.log("PDF Added");
	}
};

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// REDUX
import { createStore, applyMiddleware, compose } from "redux";
import pdfReducer from "./store/reducers/pdfReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";

// FIREBASE
import fbConfig from "./config/firebase";

const store = createStore(
	pdfReducer,
	compose(
		// Allows an extra argument to be used inside of actions
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		// Redux bindings for FireStore
		reactReduxFirebase(fbConfig),
		reduxFirestore(fbConfig)
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

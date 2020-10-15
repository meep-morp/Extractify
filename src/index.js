import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// REDUX ------------
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
	createFirestoreInstance,
	reduxFirestore,
	getFirestore,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import { pdfReducer } from "./store/reducers/pdfReducer";

// FIREBASE ---------
import firebase from "firebase/app";
import firebaseConfig from "./config/firebase";

const store = createStore(
	pdfReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
		reduxFirestore(firebase, firebaseConfig)
	)
);

// CONFIG

const rrfConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
};

const rrfProps = {
	firebase,
	config: rrfConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrfProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
);

import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBO5x_J4Ukl7XJZJasza4eLWVk-tvUBkxw",
	authDomain: "extractify-bba82.firebaseapp.com",
	databaseURL: "https://extractify-bba82.firebaseio.com",
	projectId: "extractify-bba82",
	storageBucket: "extractify-bba82.appspot.com",
	messagingSenderId: "183025568329",
	appId: "1:183025568329:web:21e9bd665a7e962dc78d98",
	measurementId: "G-5MT5Y651TV",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();
const fireStore = firebase.firestore();

export { storage, fireStore };

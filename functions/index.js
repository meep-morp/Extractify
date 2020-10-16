const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const app = express();
const crawler = require("crawler-request");
const bodyParser = require("body-parser");
const cors = require("cors");

admin.initializeApp();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/convert", async (req, res) => {
	const path = req.body.path;

	if (!path) res.json("Invalid Url");

	crawler(path)
		// eslint-disable-next-line promise/always-return
		.then(response => {
			console.log(response);
			res.json(response);
		})
		.catch(error => {
			console.log(error);
			res.json(error);
		});
});

exports.convert = functions.https.onRequest(app);

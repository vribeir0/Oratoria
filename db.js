const admin = require("firebase-admin");
const config = require('./config');

const db = admin.initializeApp(config.firebaseConfig);

module.exports = db;


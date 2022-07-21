// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqYyf8R2hWb5pzV-WFxa8Vwsey-EOStEw",
  authDomain: "app-oratoria.firebaseapp.com",
  projectId: "app-oratoria",
  storageBucket: "app-oratoria.appspot.com",
  messagingSenderId: "253285723537",
  appId: "1:253285723537:web:d018c56fb296323c5f7e30",
  measurementId: "G-013MFYENHX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig); //initialize firebase app 
module.exports = { firebase }; //export the app
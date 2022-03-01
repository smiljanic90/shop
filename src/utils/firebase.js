// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd7_ETT0GIFIS8_ghXhuEVZwc_COvPGbI",
  authDomain: "testing-81062.firebaseapp.com",
  databaseURL: "https://testing-81062-default-rtdb.firebaseio.com",
  projectId: "testing-81062",
  storageBucket: "testing-81062.appspot.com",
  messagingSenderId: "611757964419",
  appId: "1:611757964419:web:c9de2fb593967775d3afb6",
  measurementId: "G-Z5D3HXXC5T"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
    console.error('Firebase initialization error', err.message);
}
// Initialize Firebase
const fire = firebase;
const storage = firebase.storage();
export { storage, fire as default };
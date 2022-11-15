// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIs4ZB0ttUgP8q9m3_uWowpZNKPcX8YBM",
    authDomain: "olympus-11681.firebaseapp.com",
    projectId: "olympus-11681",
    storageBucket: "olympus-11681.appspot.com",
    messagingSenderId: "369686943162",
    appId: "1:369686943162:web:2be7a6494a91e9ba3ef983",
    measurementId: "G-31MH5R65NF"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = getAuth();
export {auth};

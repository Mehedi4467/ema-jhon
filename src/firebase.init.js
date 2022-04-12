// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBI47cNVmwTAZlB7d-Eh1Q7F4nrQ2BWCaw",
    authDomain: "ema-jhone-b09b1.firebaseapp.com",
    projectId: "ema-jhone-b09b1",
    storageBucket: "ema-jhone-b09b1.appspot.com",
    messagingSenderId: "313285541144",
    appId: "1:313285541144:web:6a1104c5406a039ebfb26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


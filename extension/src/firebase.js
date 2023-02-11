// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcSmkXmfYr2eqGoNllAuzJfJ722P4XC0k",
    authDomain: "cartmate-102e5.firebaseapp.com",
    projectId: "cartmate-102e5",
    storageBucket: "cartmate-102e5.appspot.com",
    messagingSenderId: "1009378811015",
    appId: "1:1009378811015:web:fd5d24c08a7559fbfb2c22"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
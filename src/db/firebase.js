// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXnN6uWN28S3EXyBR_1rHUYvuU4aYyHVQ",
  authDomain: "yormieportfolio.firebaseapp.com",
  projectId: "yormieportfolio",
  storageBucket: "yormieportfolio.appspot.com",
  messagingSenderId: "1035583948317",
  appId: "1:1035583948317:web:81b888a8768d03521be8f4",
  measurementId: "G-2Q08SX46TL"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FirebaseDB = getFirestore(app);
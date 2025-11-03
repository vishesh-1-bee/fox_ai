// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: "fussion-ai.firebaseapp.com",
  projectId: "fussion-ai",
  storageBucket: "fussion-ai.firebasestorage.app",
  messagingSenderId: "697029626913",
  appId: "1:697029626913:web:ca18a982ff8b8787e62760",
  measurementId: "G-8JEFGX7DQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db= getFirestore(app)

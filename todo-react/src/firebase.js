// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "to-do-app-db405.firebaseapp.com",
  projectId: "to-do-app-db405",
  storageBucket: "to-do-app-db405.appspot.com",
  messagingSenderId: "811080389771",
  appId: "1:811080389771:web:52c3ba0461a9fb3bc5b08e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
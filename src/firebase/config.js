// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_VUmGXWdCg7SzP7ix5ms_UruLKGZiwHA",
  authDomain: "rj-38040-96490.firebaseapp.com",
  projectId: "rj-38040-96490",
  storageBucket: "rj-38040-96490.appspot.com",
  messagingSenderId: "845875038418",
  appId: "1:845875038418:web:e03b88ee3b80a8884d850b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
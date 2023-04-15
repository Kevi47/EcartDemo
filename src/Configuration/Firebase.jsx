import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzBYu7Zzci8haZjB3HyqvKk1m03tBw79A",
  authDomain: "ecart-691bd.firebaseapp.com",
  projectId: "ecart-691bd",
  storageBucket: "ecart-691bd.appspot.com",
  messagingSenderId: "337859790716",
  appId: "1:337859790716:web:bfdd5597e36f2f772dc6f9",
  measurementId: "G-R0GW8P3E37",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

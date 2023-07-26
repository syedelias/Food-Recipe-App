// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY3FDyvdz1qlPXFiD3eQdwytXB_NeDPCA",
  authDomain: "food-recipe-app-2670f.firebaseapp.com",
  projectId: "food-recipe-app-2670f",
  storageBucket: "food-recipe-app-2670f.appspot.com",
  messagingSenderId: "432871609162",
  appId: "1:432871609162:web:bbf92b2239666d6e9827b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

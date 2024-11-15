// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC5N0b5_AliFFqXfVy0AsD11a5yK1CiZc",
  authDomain: "dragon-news-71d8f.firebaseapp.com",
  projectId: "dragon-news-71d8f",
  storageBucket: "dragon-news-71d8f.firebasestorage.app",
  messagingSenderId: "224262049562",
  appId: "1:224262049562:web:5525c94e140ce65632a6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
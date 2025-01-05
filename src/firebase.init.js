// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPa8lp65jvA0LTCTosBQ6QpG1OHuZvZy0",
  authDomain: "next-page-5de6a.firebaseapp.com",
  projectId: "next-page-5de6a",
  storageBucket: "next-page-5de6a.firebasestorage.app",
  messagingSenderId: "374118863196",
  appId: "1:374118863196:web:2d57b19b6380c389447199",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

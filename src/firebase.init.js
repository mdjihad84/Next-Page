// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVQPFIQ0V61hsMt3F80P5fNA68ATm9MO8",
  authDomain: "fir-project-1ce0d.firebaseapp.com",
  projectId: "fir-project-1ce0d",
  storageBucket: "fir-project-1ce0d.firebasestorage.app",
  messagingSenderId: "923981389214",
  appId: "1:923981389214:web:0f0c4e4397495534f78a8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

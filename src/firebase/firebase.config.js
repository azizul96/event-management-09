// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV5bwPktHgCKX07wTBtYAIUJ0O6cYexLI",
  authDomain: "event-management-project-a9.firebaseapp.com",
  projectId: "event-management-project-a9",
  storageBucket: "event-management-project-a9.appspot.com",
  messagingSenderId: "5007453998",
  appId: "1:5007453998:web:dec0661d1d5255c611d4bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
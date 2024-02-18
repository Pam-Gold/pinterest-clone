// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7zBxBbbLGPr3zRXDqwg49fMTv1nUO9cE",
  authDomain: "pinterest-clone-3bc60.firebaseapp.com",
  projectId: "pinterest-clone-3bc60",
  storageBucket: "pinterest-clone-3bc60.appspot.com",
  messagingSenderId: "208304697663",
  appId: "1:208304697663:web:0439196a1040d823b2638a",
  measurementId: "G-4PFX5KPT2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
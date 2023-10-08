// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLSzRWrLCd5C5rqO8IPOp3EzqfnQX4r3Q",
  authDomain: "moon-knite.firebaseapp.com",
  projectId: "moon-knite",
  storageBucket: "moon-knite.appspot.com",
  messagingSenderId: "928961719465",
  appId: "1:928961719465:web:48ff226369f297fe748db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
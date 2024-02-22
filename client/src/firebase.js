// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "invent-blog.firebaseapp.com",
  projectId: "invent-blog",
  storageBucket: "invent-blog.appspot.com",
  messagingSenderId: "664880904283",
  appId: "1:664880904283:web:40fee3e14795cf8e16677e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

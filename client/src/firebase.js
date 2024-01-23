// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6d6f9.firebaseapp.com",
  projectId: "mern-blog-6d6f9",
  storageBucket: "mern-blog-6d6f9.appspot.com",
  messagingSenderId: "320465493795",
  appId: "1:320465493795:web:f1e3a5ac9a67bfbe8a3696",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAinHZgT4loos9nq-SS2LHBg9aFm48ocms",
  authDomain: "mern-book-inventory-f17e4.firebaseapp.com",
  projectId: "mern-book-inventory-f17e4",
  storageBucket: "mern-book-inventory-f17e4.appspot.com",
  messagingSenderId: "997198267434",
  appId: "1:997198267434:web:cf883a8a7c2c9654752f53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
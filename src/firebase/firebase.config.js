// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJrCZT9K1tWeCpKTroO6ymeJ93yh9DSwI",
  authDomain: "mern-book-inventory-b09f8.firebaseapp.com",
  projectId: "mern-book-inventory-b09f8",
  storageBucket: "mern-book-inventory-b09f8.firebasestorage.app",
  messagingSenderId: "783906090475",
  appId: "1:783906090475:web:809375f20d137ff388fdae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
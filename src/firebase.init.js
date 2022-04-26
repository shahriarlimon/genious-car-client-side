// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAcCF9yj70Awum3m5OS1lPn9ZBQBWC26s",
  authDomain: "genious-car-service.firebaseapp.com",
  projectId: "genious-car-service",
  storageBucket: "genious-car-service.appspot.com",
  messagingSenderId: "135505636248",
  appId: "1:135505636248:web:72c881443ab4f5271d59ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
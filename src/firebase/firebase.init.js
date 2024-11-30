// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh3vvGifq_1-BShYEmAek-30g84SCFV6s",
  authDomain: "coffee-store-55ca8.firebaseapp.com",
  projectId: "coffee-store-55ca8",
  storageBucket: "coffee-store-55ca8.firebasestorage.app",
  messagingSenderId: "865677637489",
  appId: "1:865677637489:web:2a9f082d7b647b592ea8d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);